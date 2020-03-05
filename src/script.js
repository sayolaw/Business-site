function Nav(props){
	return(
	<div className="row navbar">
	
	{/* Navigation Bar */}
	<nav className="row col-md-12 justify-content-md-center align-items-lg-center
	align-items-md-center">

		{/* Company Brand Identity */}
		<a className="brand col-3">Logo</a>


		{/*Hamburgers for smaller screens*/}
		<ul className="hamburgers col-9">
		<li id="ham-1"></li>
		<li id="ham-2"></li>
		<li id="ham-3"></li>
		</ul>

		{/* Navigation Links */}
		<ul className="links row col-lg-6 col-md-8 "> 
		<li className="col-sm active"><a href="">HOME</a></li>
		<li className="col-sm"><a href="">ABOUT</a></li>
		<li className="col-sm"><a href="">PORTFOLIOS</a></li>
		<li className="col-sm"><a href="">TEAM</a></li>
		<li className="col-sm"><a href="">BLOG</a></li>
		<li className="col-sm"><a href="">CONTACT</a></li>
		</ul>

		
	</nav>

</div>
)
}

{/*Top Banner*/}
function Banner(props){
	return(
			<section className="banner row justify-content-md-center
			 align-items-md-center">
			<div className="texts col-lg-auto ">
			<h2 >Contact for one of our services</h2>
			<h4>
			OUR{/*span changes color to emphasize text*/}<span className="emphasize"> PREMIUM </span>QUALITY SERVICES AT THE MOST AFFORDABLE {/*span changes color to emphasize text*/}<span className="emphasize">PRICES</span>
			</h4>
			<br/>
			<button className="cta btn btn-primary">HIRE US</button>
			</div>
			</section>


		)
}

{/*Section showing a little about the company*/}
function Wwd(props){
	return(
		<div className="wwd row justify-content-md-center">

		<div className="knowAboutUs">
		<h3>KNOW ABOUT US</h3>
		<div className="underline">
		</div>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
		</div>

		{/*We are the best section*/}
		<div className="theBest">
		<div className="text col-md-5">
		<h3>WE ARE THE BEST</h3>
		<p >Lorm ipsum dolor sit amet, consectetur adipiscing elit,
		 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
		 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
		 reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
		 pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
		 culpa qui officia deserunt mollit anim id est laborum</p>
		<button className="btn btn-outline-secondary">READ MORE</button>
		</div>
		<img className="image" src="Images/group.png" />
		
		</div>

		{/*Services*/}
		<div className="service col-lg-12 ">

		<div className="overview col-lg-8">
		<h3>SERVICES WE PROVIDE</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
		 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
		 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
		 reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
		 pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
		 culpa qui officia deserunt mollit anim id est laborum</p>
		</div>

		<ul className="row col-lg-9 mx-auto">
		<Service icon="icon fa fa-users fa-2x"
		aria-hidden="true"
		 title="CONSULTANCY"
		 explanation="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"/>
		<Service icon="icon fa fa-bullhorn fa-2x"
		aria-hidden="true"
		 title="MARKETING"
		 explanation="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex" />
		<Service icon="icon fa fa-book fa-2x "
		aria-hidden="true"
		 title="RESEARCH"
		 explanation="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex" />
		</ul>
		
		</div>


		</div>

		)
}

function Service(props){
	return(
			<div className="services col-lg-4">
			<span className={props.icon}></span>
			<h3>{props.title}</h3>
			<p>{props.explanation}</p>
			</div>

		)
}
function App(props){
	return(
		<div className="app">
		<Nav />
		<Banner />
		<Wwd />
		</div>
		)
}



ReactDOM.render(
	<App />,
	document.getElementById('root'))