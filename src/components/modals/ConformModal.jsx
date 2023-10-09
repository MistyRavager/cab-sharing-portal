import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ConformModal = ({
  modalText,
  buttonText,
  buttonClickFunction,
  displayText,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const router = useRouter();

  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <button
        className=" btn bg-yellow-400 hover:bg-yellow-400 text-black capitalize font-[400] text-lg my-3 transition-all hover:-translate-y-1"
        onClick={() => showModal()}
      >
        {displayText}
      </button>
      {isModalOpen && (
        <dialog
          id="my_modal_3"
          className="modal modal-open"
          onClick={(e) => e.stopPropagation()}
        >
          <form
            method="dialog"
            className="modal-box bg-white text-black border-black border-2"
          >
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => closeModal()}
            >
              ✕
            </button>
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-lg text-secondary/80 border-secondary border-b-2 w-fit">
                Conformation
              </h3>
              {modalText}
              <button
                className="btn  ml-auto bg-yellow-400 hover:bg-yellow-500 text-black "
                onClick={() => {
                  buttonClickFunction();
                  closeModal();
                }}
              >
                {buttonText}
              </button>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button onClick={() => closeModal()}>close</button>
          </form>
        </dialog>
      )}
    </>
  );
};

export default ConformModal;