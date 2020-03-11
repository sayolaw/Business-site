function Nav(props){
	return(
	<div className="row navbar">
	
	{/* Navigation Bar */}
	<nav className="row justify-content-md-center align-items-lg-center
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

		<div className="writeup">
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


{/*Complete Skillsets*/}
function Skills(props){
	return(
		<div className="skills row">

			<Skill number="100" mix="full gauge" skill="Management" />
			<Skill number="50"  mix="half gauge" skill="Marketing" />
			<Skill number="73"  mix="quarter-full gauge" skill="Research" />
			<Skill number="23"  mix="less-half gauge" skill="Consultancy" />
			<Skill number="93"   mix="almost-full gauge" skill="Promotion" />
		</div>)
}

function Skill(props){
	return(
		<div className="skill">
		<div className="contain">
			<div className="percent">
				<div  className={props.mix}>
				</div>
				<div className="circle">
					<h2>{props.number}<small>%</small></h2>
				</div>
			</div>
		</div>
		<h3>{props.skill}</h3>
		</div>

		)
}


{/*Recent Projects*/}
function Recents(props){
	return(
		<div className="recents col-md-12">
			<div className="writeup">
			<h3>SOME RECENT PROJECTS</h3>
			<div className="underline">
			</div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
			</div>
			<div className="projects row col-md-12">
			<Project name="PAPERCLIPS" category="BRANDING" image="Images/image1.jpg" />
			<Project name="SPACESHIP" category="MARKETING" image="Images/image2.jpg" />
			<Project name="HONEYCOMB" category="CONSULTANCY" image="Images/image3.jpg"/>
			<Project name="JELLYBEAN" category="PROMOTIOM" image="Images/image4.jpg" />
			</div>
			
		</div>
		)
}
function Project(props){
	return(
		<div className="project col-md-3">
			<img src={props.image} className="col-md-12"/>
			<div className="info col-md-11">
			<h4>{props.name}</h4>
			<div className="underline"></div>
			<p>{props.category}</p>
			</div>
		</div>)
}


{/*twitter feed page */}
function Twitter(props){
	return(
		<div className="twitter col-md-12">
		<div className="info">
		<h4>LATEST FROM TWITTER</h4>
		<p>All the latest news about our products and services on twitter</p>
		<a href="https://www.google.com">www.google.com</a>
		</div>
		<div className="images row">
		<img src="Images/image1.jpg" className="col-md-3" />
		<img src="Images/image2.jpg" className="col-md-3" />
		<img src="Images/image3.jpg" className="col-md-3" />
		<img src="Images/image4.jpg" className="col-md-3" />
		</div>
		<div className="button col-md-12">
		<button className="btn btn-outline-secondary">SEE MORE</button>
		</div>
		</div>
		)
}
{/*Teams page */}
function Team(props){
	return(
		<div className="team">
		<div className="writeup">
			<h3>OUR TEAM MEMBERS</h3>
			<div className="underline">
			</div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
			</div>
		<div className="row members align-items-center justify-content-center">
		<Member name="TONI LAW" position="CEO" twitter="" facebook="" linkedin="" image="Images/member2.jpg" />
		<Member name="SAYO LAW" position="CREATIVE DIRECTOR" twitter="" facebook="" linkedin="" image="Images/member2.jpg" />
		<Member name="TOSIN LAW" position="CEO" twitter="" facebook="" linkedin="" image="Images/member2.jpg" />
		</div>
		</div>

		)
}
{/*each members profile*/}
function Member(props){
	return(
		<div className="member col-md-3">
		<div className="image">
		<img className="col-md-12" src={props.image} />
		<div className="socials col-md-12 row align-items-center justify-content-center">
		<a href={props.twitter}><i className="fab fa-twitter"></i></a>
		<a href={props.facebook}><i className="fab fa-facebook-f"></i></a>
		<a href={props.linkedin}><i className="fab fa-linkedin-in"></i></a>
		</div>
		</div>
		<div className="info">
		<h4>{props.name}</h4>
		<p>{props.position}</p>
		</div>
		</div>
		)
}

function Reviews(props){
	return(
		<div className="reviews">
		<h4>WHAT OUR CLIENTS ARE SAYING</h4>
		<div className="container">
		<div id="container">
		<div className="info">
		
		<p>"It was a pleasure to work with Sayo, He is very dedicated, creative 
		with an eye for detail, i thorough professional, He more than exceeded our expectations...would totally recommend"</p>
		<p>John Doe</p>
		<a href="https://www.google.com">www.google.com</a>
		</div>
		<div className="info">
		
		<p>"It was a pleasure to work with Sayo, He is very dedicated, creative 
		with an eye for detail, i thorough professional, He more than exceeded our expectations...would totally recommend"</p>
		<p>James Doe</p>
		<a href="https://www.google.com">www.google.com</a>
		</div>
		<div className="info">
		
		<p>"It was a pleasure to work with Sayo, He is very dedicated, creative 
		with an eye for detail, i thorough professional, He more than exceeded our expectations...would totally recommend"</p>
		<p>John Doe</p>
		<a href="https://www.google.com">www.google.com</a>
		</div>
		</div>
		</div>
		</div>
		)
}

function Blog(props){
	return(
		<div className="blog">
		<div className="writeup">
			<h3>OUR BLOG</h3>
			<div className="underline">
			</div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
			</div>
		<Posts title="Lorem ipsum dolor sit amet" 
		image="Images/background.jpg" 
		date="10 April 2014" 
		message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" />
		<PostsR title="Lorem ipsum dolor sit amet" 
		image="Images/background.jpg" 
		date="10 April 2014" 
		message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" />
		<Posts title="Lorem ipsum dolor sit amet" 
		image="Images/background.jpg"
		date="10 April 2014" 
		message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" />
		<div className="all"><h4>All Post</h4></div>
		</div>
		)
}
function Posts(props){
	return(
		<div className="posts row justify-content-center">
		<img src={props.image} className="col-md-4" />
		<div className="info col-md-5">
		<p className="date">{props.date}</p>
		<h4>{props.title}</h4>
		<p>{props.message}</p>
		</div>
		</div>

		)
}
function PostsR(props){
	return(
		<div className="posts postsr row justify-content-center">
		<div className="info col-md-4">
		<p className="date">{props.date}</p>
		<h4>{props.title}</h4>
		<p>{props.message}</p>
		</div>
		<img src={props.image} className="col-md-5" />
		</div>

		)
}

{/*Contact Us Page*/}
function Contact(props){
	return(
			<div className="contact ">
			<h3>CONTACT</h3>
			<form className="col-md-8">
			<div className="column row col-md-12">
			<div className="form-item col">
			<input type="text" name="name"  required/>
			<label for="name">Name*</label>
			</div>

			<div className="form-item col ">
			<input type="email" name="email" required/>
			<label for="email">Email*</label>
			</div>
			</div>
			<div className="form-item ">
			<textarea  name="message"  className="col-12"></textarea>
			<label for="email">Message</label>
			</div>
			<hr />
			<button type="submit"className="btn btn-outline-secondary">Submit</button>
			</form>
			</div>

		)
}

{/*footer section */}
function Footer(props){
	return(
		<div className="footer row justify-content-center align-items-center">
		<div className="company col">
		<h2>Logo</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
		quis<br /><br />nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		 consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		 cillum dolore eu
		 fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
		</div>
		<div className="recent col-md-3">
		<h6>RECENT POSTS</h6>
		<Footposts date="March 11, 2020" post=" Duis aute irure dolor in reprehenderit in"/>
		<Footposts date="March 11, 2020" post=" Duis aute irure dolor in reprehenderit in"/>
		<Footposts date="March 11, 2020" post=" Duis aute irure dolor in reprehenderit in"/>

		</div>

		<div className="feeds col-md-3">
		<h6>TWITTER FEEDS</h6>
		<Feeds time="About 2 days ago" post=" You did an amazing job" user="@sayoDaGenius"/>
		<Feeds time="About 2 days ago" post=" You did an amazing job" user="@sayoDaGenius"/>
		<Feeds time="About 2 days ago" post=" You did an amazing job" user="@sayoDaGenius"/>

		</div>
		<div className="address  col-md-3">
		<h6>OUR ADDRESS</h6>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
		quis</p>
		<ul className="info">
		<li><i class="fa fa-location-arrow"></i>23 Pinkett hill drive, detroit</li>
		<li><i class="fa fa-phone"></i>+2347039299606</li>
		<li><i class="fa fa-envelope"></i>shizzman@gmail.com</li>
		</ul>
		</div>

		</div>
		)
}
function Creator(props){
	return(
		<div className="creator">
		<h6>Engineered By STL &#169; 2020 All Rights Reserved</h6>
		</div>
		)
}
function Footposts(props){
	return(
		<div className="footposts">
		<p className="date">{props.date}</p>
		<p className="post">{props.post}</p>
		</div>)
}
function Feeds(props){
	return(
		<div className="feed">
		<p className="info"><span class="time">{props.time}</span><span class="user">{props.user}</span></p>
		<p className="post">{props.post}</p>
		</div>)
}
function App(props){
	return(
		<div className="app">
		<Nav />
		<Banner />
		<Wwd />
		<Skills />
		<Recents />
		<Twitter />
		<Team />
		<Reviews />
		<Blog />
		<Contact />
		<Footer />
		<Creator />
		</div>
		)
}



ReactDOM.render(
	<App />,
	document.getElementById('root'))