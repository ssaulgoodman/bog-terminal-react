import * as PIXI from "pixi.js";
import { Live2DModel } from "pixi-live2d-display";
import { useEffect, useRef } from "react";
import { MotionSync } from "live2d-motionsync";
import { modelMap } from "./models";

type PixiCanvasProps = {
  leftModelName: string;
  rightModelName: string;
  // These refs allow the parent to access the loaded models.
  leftModelRef: React.MutableRefObject<Live2DModel | null>;
  rightModelRef: React.MutableRefObject<Live2DModel | null>;
  // These refs allow the parent to access the MotionSync instances.
  leftMotionSync: React.MutableRefObject<MotionSync | undefined>;
  rightMotionSync: React.MutableRefObject<MotionSync | undefined>;
  // A callback to control the loading spinner in the parent.
  setLoading: (loading: boolean) => void;
};

export default function PixiCanvas({
  leftModelName,
  rightModelName,
  leftModelRef,
  rightModelRef,
  leftMotionSync,
  rightMotionSync,
  setLoading,
}: PixiCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let app: PIXI.Application;

    const loadModels = async () => {
      if (!canvasRef.current) return;
      setLoading(true);

      // Create a new PIXI application with the canvas, making it resizable.
      app = new PIXI.Application({
        view: canvasRef.current,
        resizeTo: canvasRef.current.parentElement || undefined,
        backgroundAlpha: 0,
      });

      // --- Load Left Model ---
      const leftModelUrl = modelMap[leftModelName];
      const leftModel = await Live2DModel.from(leftModelUrl, {
        autoInteract: false,
      });
      leftModelRef.current = leftModel;

      // --- Load Right Model ---
      const rightModelUrl = modelMap[rightModelName];
      const rightModel = await Live2DModel.from(rightModelUrl, {
        autoInteract: false,
      });
      rightModelRef.current = rightModel;

      // --- Calculate positions and scaling ---
      const canvasWidth = app.view.width;
      const canvasHeight = app.view.height;

      // Position and scale the left model.
      const leftModelRatio = leftModel.width / leftModel.height;
      leftModel.height = canvasHeight * 0.7; // 70% of canvas height
      leftModel.width = leftModel.height * leftModelRatio;
      leftModel.x = canvasWidth / 4 - leftModel.width / 2 + 100; // shifted right by 100px
      leftModel.y = 0;

      // Position and scale the right model.
      const rightModelRatio = rightModel.width / rightModel.height;
      rightModel.height = canvasHeight * 0.7;
      rightModel.width = rightModel.height * rightModelRatio;
      rightModel.x = (3 * canvasWidth) / 4 - rightModel.width / 2 + 100;
      rightModel.y = 0;

      // Add the models to the PIXI stage.
      app.stage.addChild(leftModel as unknown as PIXI.DisplayObject);
      app.stage.addChild(rightModel as unknown as PIXI.DisplayObject);

      // --- Initialize MotionSync for both models ---
      leftMotionSync.current = new MotionSync(leftModel.internalModel);
      await leftMotionSync.current.loadMotionSyncFromUrl(
        leftModelUrl.replace(/.model(.)?.json/, ".motionsync3.json")
      );

      rightMotionSync.current = new MotionSync(rightModel.internalModel);
      await rightMotionSync.current.loadMotionSyncFromUrl(
        rightModelUrl.replace(/.model(.)?.json/, ".motionsync3.json")
      );

      setLoading(false);
    };

    loadModels();

    // Cleanup on unmount
    return () => {
      leftMotionSync.current?.reset();
      rightMotionSync.current?.reset();
      leftModelRef.current?.destroy();
      rightModelRef.current?.destroy();
      app?.destroy();
    };
  }, [
    leftModelName,
    rightModelName,
    leftModelRef,
    rightModelRef,
    leftMotionSync,
    rightMotionSync,
    setLoading,
  ]);

  return <canvas ref={canvasRef} />;
}
