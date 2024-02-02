import React, { useState, useEffect } from "react";
import axios from "axios";
import scss from "./Slider.module.scss";
import Modals from "../../../Modals/Modals";

const Slider = () => {
	const [sliderDatas, setSliderDatas] = useState([]);
	const [modal, setModal] = useState(false);
	const [modalOpen, setModalOpen] = useState(null);

	const openModal = (item) => {
		setModalOpen(item);
		setModal(true);
	};

	const closeModal = () => {
		setModalOpen(null);
		setModal(false);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://api.elchocrud.pro/api/v1/3de0fc00463007c3f099a3bb625f6188/apple"
				);

				console.log(response.data);

				setSliderDatas(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<section className={scss.Slider}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.cardContainer}>
							{sliderDatas.map((item, index) => (
								<div
									onClick={() => openModal(item)}
									key={index}
									className={scss.card}>
									<img className={scss.img} src={item.img} alt={item.title} />
									<div className={scss.cardInfo}>
										<h3 className={scss.title}>{item.title}</h3>
										<p className={scss.description}>{item.description}</p>
									</div>
								</div>
							))}
							<Modals isOpen={modal} closeModal={closeModal}>
								{modalOpen && (
									<>
										<div key={modalOpen._id} className={scss.card}>
											<img
											className={`${scss.img} ${scss.circularImg}`}
												src={modalOpen.img}
												alt={modalOpen.title}
											/>
											<div className={scss.cardInfo}>
												<h3 className={scss.title}>{modalOpen.title}</h3>
												<p className={scss.description}>
													{modalOpen.description}
												</p>
											</div>
										</div>
										<h2> GREAT BOOK {modalOpen.additionalData}</h2>
										<h3> PRICE :: 30 EURO {modalOpen.additionalData}</h3>
									</>
								)}
							</Modals>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Slider;
