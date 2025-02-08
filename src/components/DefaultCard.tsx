export const DefaultCard = ({
  children,
  headerContent,
  className = "",
  childrenClassname = "",
}: {
  children?: React.ReactNode;
  headerContent?: React.ReactNode;
  className?: string;
  childrenClassname?: string;
}) => {
  return (
    <div
      className={`relative border border-black/[0.2] dark:border-white/[0.2] bg-black border-solid flex flex-col w-full mx-auto shadow-[0px_0px_59px_0px_rgba(66,66,66,1)] ${className}`}
    >
      <Icon className="absolute min-h-4 max-h-6 w-auto aspect-square -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute min-h-4 max-h-6 w-auto aspect-square -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute min-h-4 max-h-6 w-auto aspect-square -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute min-h-4 max-h-6 w-auto aspect-square -bottom-3 -right-3 dark:text-white text-black" />
      {/* Header Section */}
      {headerContent != null ? (
        <div
          className="
          relative 
          w-full h-12 
          flex items-center justify-center 
          border border-black/[0.2] dark:border-white/[0.2] border-solid flex-shrink-0
        "
        >
          {/* Header Section Icons */}
          <Icon className="absolute min-h-4 max-h-6 w-auto aspect-square -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute min-h-4 max-h-6 w-auto aspect-square -bottom-3 -right-3 dark:text-white text-black" />

          {/* You can put a title or other header content here */}
          <div className="absolute top-2 right-4 text-xs text-gray-200 ">
            <span className="text-[clamp(0.65rem,1.5vw,0.875rem)] text-gray-200 font-mono">
              {headerContent}
            </span>
            <p className="absolute ml-2 right-5 text-gray-100">FEED</p>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className={childrenClassname}>{children}</div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
