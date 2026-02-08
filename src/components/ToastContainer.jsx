import { useState } from "react";

const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  const handleAdd = () => {
    const randomId = Date.now();
    const newToasts = [
      ...toasts,
      { id: randomId, message: "Success", type: "success" },
    ];
    setToasts(newToasts)
    setTimeout(() => handleClose(randomId), 5000)
  };

  const handleClose = (id) => {
    setToasts(prev => {
        const currToasts = [...prev]
        let filteredToasts = currToasts.filter(toast => toast.id !== id)
        return filteredToasts;
    })
  }

  return (
    <div className="container">
        <div className="toaster-container">
      {toasts &&
        toasts.map((toast) => {
          return (
            
              <div className="toast">
                {toast.message}
                <span onClick={() => handleClose(toast.id)} className="xbtn">
                  X
                </span>
              </div>
            
          );
        })}
        </div>

      <button className='success-btn' onClick={handleAdd}>Success Notification</button>
    </div>
  );
};

export default ToastContainer;
