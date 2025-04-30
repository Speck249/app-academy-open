import { useEffect, useState } from 'react';

function Message({ size, featherCount }) {
  const [classSize, setClassSize] = useState('s');
  const [message, setMessage] = useState("")
 
  useEffect(() => {
    console.log('Message', size);

    let cName = ''
    switch (size) {
      case 'm':
        cName = 'medium';
        break;
      case 'l':
        cName = 'large';
        break;
      case 'xl':
        cName = 'xlarge';
        break;
      default:
        cName = 'small';
        break;
    }
    setClassSize(cName)
  }, [size])

  useEffect(() => {
    if (featherCount <= 0) {
      setMessage("oh my your bird is naked")
    } else if (featherCount >= 10) {
      setMessage("oh my your bird is fully feathered")
    } else {
      setMessage("it's better than a birthday suit")
    }}, [featherCount])

  return (
    <div className={`message ${classSize}`}>{message}</div>
  );
};

export default Message;