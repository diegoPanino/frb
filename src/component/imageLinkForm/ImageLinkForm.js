import React from 'react';

import './css/imageLinkForm.css';

export const ImageLinkForm = ({onInputChange, onBtnSubmit}) =>{
	return(
		<div>
			<p className="f3 center">
				{'This Magic Brain will detect faces in your pics!'}
			</p>
			<div className="center">
				<div className="center form pa4 br3 shadow-5">
					<input className="f4 pa2 w-70 center" type="text" onChange={onInputChange} />
					<button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
							onClick={onBtnSubmit} >Detect</button>
				</div>
			</div>
		</div>
		)
}