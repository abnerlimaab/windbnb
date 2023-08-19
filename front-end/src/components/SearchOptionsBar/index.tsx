interface SearchOptionsBarProps {
  children: React.ReactNode;
}

function SearchOptionsBar({ children }: SearchOptionsBarProps) {
  return (
    <div className="flex flex-1 items-center flex-wrap border border-[#F2F2F2] rounded-2xl shadow-md">
      {children}
    </div>
  );
}

interface SearchOptionBarButtonProps {
  children: React.ReactNode;
  active: boolean;
}

export function SearchOptionBarButton({
  children,
  active,
}: SearchOptionBarButtonProps) {
  const color = active ? 'text-[#333333]' : 'text-[#BDBDBD]';

  return (
    <button
      className={`py-2 px-4 rounded text-sm font-['Mulish'] ${color}`}
      type="button"
    >
      {children}
    </button>
  );
}

export function SearchOptionBarDivider() {
  return <div className="border border-[##F2F2F2] h-14" />;
}

export default SearchOptionsBar;
