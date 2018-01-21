import Nav from '../components/Nav';

 const Layout = (props) => {
  const { children } = props;

  return (
    <main>
      <Nav />
      {children}
    </main>
  );
};

export default Layout;
