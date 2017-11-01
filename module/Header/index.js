import ReactDOM from "react-dom";
import React from 'react';

const headerImage={
	height:"450px", 
	margin:"0px auto", 
	display:"flex", 
	alignItems:'center', 
	justifyContent:"center", 
	backgroundImage:"url('./img/hanyijie_sky_scenery_ship_anime_art_104162_2560x1024.jpg')", 
	backgroundSize:"cover",
	backgroundRepeat:"no-repeat",
	WebkitBackgroundSize:"cover",
	MozBackgroundSize:"cover",
	OBackgroundSize:"cover"
}

class Header extends React.Component{

	render(){
		return (
			<div>
				<div style={headerImage}>
					<h1>TEST Header</h1>
				</div>

			</div>
		)
	}
}

export default Header;