import Nav from '../components/Nav'
import Footer from '../components/Footer'

 const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Nav />
      {children}
      <Footer>Footer</Footer>
    </div>
  );
};

export default Layout;
