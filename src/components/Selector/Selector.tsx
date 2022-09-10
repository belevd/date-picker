import React, {useState} from 'react';
import classes from './Selector.module.css';
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

interface SelectorOptionI {
  label: string,
  value: any,
}

interface SelectorI {
  options: [SelectorOptionI],
}

function Selector({ options }: SelectorI) {
  const [isOpen, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectorOptionI | null>(null);

  return (
    <div className={cx('selector')}>
      <p className={cx('selector__value')}>{selectedOption?.label}</p>
    </div>
  );
}

export default Selector;