const Container = ({ col, etc, children }) => {
  let flexCol = col && 'flex-col items-center';

  return <div className={`flex h-full ${flexCol} ${etc}`}>{children}</div>;
};

export default Container;
