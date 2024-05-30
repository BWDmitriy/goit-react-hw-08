// Layout.jsx
import { AppBar } from './AppBar';

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <main>{children}</main>
    </div>
  );
};