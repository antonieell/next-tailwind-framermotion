import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="max-w-5xl min-h-screen  px-4 mx-auto md:px-8">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
