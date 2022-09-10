import classes from './App.module.css';
import classNames from "classnames/bind";
import Input from "components/Input";

const cx = classNames.bind(classes);

function App() {
  return (
    <div className={cx('App')}>
      <Input />
    </div>
  )
}

export default App
