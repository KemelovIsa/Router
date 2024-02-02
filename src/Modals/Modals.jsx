import React from "react";
import scss from "./Modal.module.scss";
const Modals = ({ isOpen, closeModal, children }) => {
	if (!isOpen) {
		return null;
	}

	return (
		<div onClick={closeModal} className={scss.mainModal}>
			<div className={scss.modal} img={scss.img}>
				{children}
			</div>
		</div>
	);
};

export default Modals;
