interface NavItemProps {
  /**
   * The text of the navigation item
   */
  text: string
}

function NavItem({ text }: NavItemProps) {
  return (
    <button
      className="bg-secondary text-primary uppercase font-semibold px-10 py-6
        hover:bg-primary hover:text-white ease-in-out duration-150
      "
      type="button"
    >
      {text}
    </button>
  );
}

export default NavItem;
