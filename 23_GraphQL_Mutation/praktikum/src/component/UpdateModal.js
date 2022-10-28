import React from "react";

const UpdateModal = ({ handleUpdate, handleChange, handleModalTrigger, update }) => {
	return (
		<div>
			<div className="darkBG" onClick={handleModalTrigger} />
			<div className="centered">
				<div className="modal">
					<div className="modalHeader">
						<h5 className="heading">Update Passenger</h5>
					</div>
					<form onSubmit={handleUpdate}>
						<div className="modalContent">
							<input type="text" className="input-text" placeholder="Nama anda ..." defaultValue={update.nama} onChange={handleChange} name="nama" />
							<input type="number" className="input-text" placeholder="Umur anda ..." defaultValue={update.umur} onChange={handleChange} name="umur" />
							<select name="jenisKelamin" defaultValue={update.jenisKelamin} onChange={handleChange}>
								<option value="Pria">Pria</option>
								<option value="Wanita">Wanita</option>
							</select>
						</div>
						<div className="modalActions">
							<div className="actionsContainer">
								<button className="updateBtn" type="submit">
									Update
								</button>
								<button className="cancelBtn" onClick={handleModalTrigger}>
									Cancel
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UpdateModal;
