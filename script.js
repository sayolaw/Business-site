function Nav(props) {
		return React.createElement(
				"div",
				{ className: "row navbar" },
				React.createElement(
						"nav",
						{ className: "row justify-content-md-center align-items-lg-center\r align-items-md-center" },
						React.createElement(
								"a",
								{ className: "brand col-3" },
								"Logo"
						),
						React.createElement(
								"ul",
								{ className: "hamburgers col-9" },
								React.createElement("li", { id: "ham-1" }),
								React.createElement("li", { id: "ham-2" }),
								React.createElement("li", { id: "ham-3" })
						),
						React.createElement(
								"ul",
								{ className: "links row col-lg-6 col-md-8 " },
								React.createElement(
										"li",
										{ className: "col-sm active" },
										React.createElement(
												"a",
												{ href: "" },
												"HOME"
										)
								),
								React.createElement(
										"li",
										{ className: "col-sm" },
										React.createElement(
												"a",
												{ href: "" },
												"ABOUT"
										)
								),
								React.createElement(
										"li",
										{ className: "col-sm" },
										React.createElement(
												"a",
												{ href: "" },
												"PORTFOLIOS"
										)
								),
								React.createElement(
										"li",
										{ className: "col-sm" },
										React.createElement(
												"a",
												{ href: "" },
												"TEAM"
										)
								),
								React.createElement(
										"li",
										{ className: "col-sm" },
										React.createElement(
												"a",
												{ href: "" },
												"BLOG"
										)
								),
								React.createElement(
										"li",
										{ className: "col-sm" },
										React.createElement(
												"a",
												{ href: "" },
												"CONTACT"
										)
								)
						)
				)
		);
}

{/*Top Banner*/}
function Banner(props) {
		return React.createElement(
				"section",
				{ className: "banner row justify-content-md-center\r align-items-md-center" },
				React.createElement(
						"div",
						{ className: "texts col-lg-auto " },
						React.createElement(
								"h2",
								null,
								"Contact for one of our services"
						),
						React.createElement(
								"h4",
								null,
								"OUR",
								React.createElement(
										"span",
										{ className: "emphasize" },
										" PREMIUM "
								),
								"QUALITY SERVICES AT THE MOST AFFORDABLE ",
								React.createElement(
										"span",
										{ className: "emphasize" },
										"PRICES"
								)
						),
						React.createElement("br", null),
						React.createElement(
								"button",
								{ className: "cta btn btn-primary" },
								"HIRE US"
						)
				)
		);
}

{/*Section showing a little about the company*/}
function Wwd(props) {
		return React.createElement(
				"div",
				{ className: "wwd row justify-content-md-center" },
				React.createElement(
						"div",
						{ className: "writeup" },
						React.createElement(
								"h3",
								null,
								"KNOW ABOUT US"
						),
						React.createElement("div", { className: "underline" }),
						React.createElement(
								"p",
								null,
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
						)
				),
				React.createElement(
						"div",
						{ className: "theBest" },
						React.createElement(
								"div",
								{ className: "text col-md-5" },
								React.createElement(
										"h3",
										null,
										"WE ARE THE BEST"
								),
								React.createElement(
										"p",
										null,
										"Lorm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
								),
								React.createElement(
										"button",
										{ className: "btn btn-outline-secondary" },
										"READ MORE"
								)
						),
						React.createElement("img", { className: "image", src: "Images/group.png" })
				),
				React.createElement(
						"div",
						{ className: "service col-lg-12 " },
						React.createElement(
								"div",
								{ className: "overview col-lg-8" },
								React.createElement(
										"h3",
										null,
										"SERVICES WE PROVIDE"
								),
								React.createElement(
										"p",
										null,
										"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
								)
						),
						React.createElement(
								"ul",
								{ className: "row col-lg-9 mx-auto" },
								React.createElement(Service, { icon: "icon fa fa-users fa-2x",
										"aria-hidden": "true",
										title: "CONSULTANCY",
										explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex" }),
								React.createElement(Service, { icon: "icon fa fa-bullhorn fa-2x",
										"aria-hidden": "true",
										title: "MARKETING",
										explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex" }),
								React.createElement(Service, { icon: "icon fa fa-book fa-2x ",
										"aria-hidden": "true",
										title: "RESEARCH",
										explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex" })
						)
				)
		);
}

function Service(props) {
		return React.createElement(
				"div",
				{ className: "services col-lg-4" },
				React.createElement("span", { className: props.icon }),
				React.createElement(
						"h3",
						null,
						props.title
				),
				React.createElement(
						"p",
						null,
						props.explanation
				)
		);
}

{/*Complete Skillsets*/}
function Skills(props) {
		return React.createElement(
				"div",
				{ className: "skills row" },
				React.createElement(Skill, { number: "100", mix: "full gauge", skill: "Management" }),
				React.createElement(Skill, { number: "50", mix: "half gauge", skill: "Marketing" }),
				React.createElement(Skill, { number: "73", mix: "quarter-full gauge", skill: "Research" }),
				React.createElement(Skill, { number: "23", mix: "less-half gauge", skill: "Consultancy" }),
				React.createElement(Skill, { number: "93", mix: "almost-full gauge", skill: "Promotion" })
		);
}

function Skill(props) {
		return React.createElement(
				"div",
				{ className: "skill" },
				React.createElement(
						"div",
						{ className: "contain" },
						React.createElement(
								"div",
								{ className: "percent" },
								React.createElement("div", { className: props.mix }),
								React.createElement(
										"div",
										{ className: "circle" },
										React.createElement(
												"h2",
												null,
												props.number,
												React.createElement(
														"small",
														null,
														"%"
												)
										)
								)
						)
				),
				React.createElement(
						"h3",
						null,
						props.skill
				)
		);
}

{/*Recent Projects*/}
function Recents(props) {
		return React.createElement(
				"div",
				{ className: "recents col-md-12" },
				React.createElement(
						"div",
						{ className: "writeup" },
						React.createElement(
								"h3",
								null,
								"SOME RECENT PROJECTS"
						),
						React.createElement("div", { className: "underline" }),
						React.createElement(
								"p",
								null,
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
						)
				),
				React.createElement(
						"div",
						{ className: "projects row col-md-12" },
						React.createElement(Project, { name: "PAPERCLIPS", category: "BRANDING", image: "Images/image1.jpg" }),
						React.createElement(Project, { name: "SPACESHIP", category: "MARKETING", image: "Images/image2.jpg" }),
						React.createElement(Project, { name: "HONEYCOMB", category: "CONSULTANCY", image: "Images/image3.jpg" }),
						React.createElement(Project, { name: "JELLYBEAN", category: "PROMOTIOM", image: "Images/image4.jpg" })
				)
		);
}
function Project(props) {
		return React.createElement(
				"div",
				{ className: "project col-md-3" },
				React.createElement("img", { src: props.image, className: "col-md-12" }),
				React.createElement(
						"div",
						{ className: "info col-md-11" },
						React.createElement(
								"h4",
								null,
								props.name
						),
						React.createElement("div", { className: "underline" }),
						React.createElement(
								"p",
								null,
								props.category
						)
				)
		);
}

{/*twitter feed page */}
function Twitter(props) {
		return React.createElement(
				"div",
				{ className: "twitter col-md-12" },
				React.createElement(
						"div",
						{ className: "info" },
						React.createElement(
								"h4",
								null,
								"LATEST FROM TWITTER"
						),
						React.createElement(
								"p",
								null,
								"All the latest news about our products and services on twitter"
						),
						React.createElement(
								"a",
								{ href: "https://www.google.com" },
								"www.google.com"
						)
				),
				React.createElement(
						"div",
						{ className: "images row" },
						React.createElement("img", { src: "Images/image1.jpg", className: "col-md-3" }),
						React.createElement("img", { src: "Images/image2.jpg", className: "col-md-3" }),
						React.createElement("img", { src: "Images/image3.jpg", className: "col-md-3" }),
						React.createElement("img", { src: "Images/image4.jpg", className: "col-md-3" })
				),
				React.createElement(
						"div",
						{ className: "button col-md-12" },
						React.createElement(
								"button",
								{ className: "btn btn-outline-secondary" },
								"SEE MORE"
						)
				)
		);
}
{/*Teams page */}
function Team(props) {
		return React.createElement(
				"div",
				{ className: "team" },
				React.createElement(
						"div",
						{ className: "writeup" },
						React.createElement(
								"h3",
								null,
								"OUR TEAM MEMBERS"
						),
						React.createElement("div", { className: "underline" }),
						React.createElement(
								"p",
								null,
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
						)
				),
				React.createElement(
						"div",
						{ className: "row members align-items-center justify-content-center" },
						React.createElement(Member, { name: "TONI LAW", position: "CEO", twitter: "", facebook: "", linkedin: "", image: "Images/member2.jpg" }),
						React.createElement(Member, { name: "SAYO LAW", position: "CREATIVE DIRECTOR", twitter: "", facebook: "", linkedin: "", image: "Images/member2.jpg" }),
						React.createElement(Member, { name: "TOSIN LAW", position: "CEO", twitter: "", facebook: "", linkedin: "", image: "Images/member2.jpg" })
				)
		);
}
{/*each members profile*/}
function Member(props) {
		return React.createElement(
				"div",
				{ className: "member col-md-3" },
				React.createElement(
						"div",
						{ className: "image" },
						React.createElement("img", { className: "col-md-12", src: props.image }),
						React.createElement(
								"div",
								{ className: "socials col-md-12 row align-items-center justify-content-center" },
								React.createElement(
										"a",
										{ href: props.twitter },
										React.createElement("i", { className: "fab fa-twitter" })
								),
								React.createElement(
										"a",
										{ href: props.facebook },
										React.createElement("i", { className: "fab fa-facebook-f" })
								),
								React.createElement(
										"a",
										{ href: props.linkedin },
										React.createElement("i", { className: "fab fa-linkedin-in" })
								)
						)
				),
				React.createElement(
						"div",
						{ className: "info" },
						React.createElement(
								"h4",
								null,
								props.name
						),
						React.createElement(
								"p",
								null,
								props.position
						)
				)
		);
}

function Reviews(props) {
		return React.createElement(
				"div",
				{ className: "reviews" },
				React.createElement(
						"h4",
						null,
						"WHAT OUR CLIENTS ARE SAYING"
				),
				React.createElement(
						"div",
						{ className: "container" },
						React.createElement(
								"div",
								{ id: "container" },
								React.createElement(
										"div",
										{ className: "info" },
										React.createElement(
												"p",
												null,
												"\"It was a pleasure to work with Sayo, He is very dedicated, creative with an eye for detail, i thorough professional, He more than exceeded our expectations...would totally recommend\""
										),
										React.createElement(
												"p",
												null,
												"John Doe"
										),
										React.createElement(
												"a",
												{ href: "https://www.google.com" },
												"www.google.com"
										)
								),
								React.createElement(
										"div",
										{ className: "info" },
										React.createElement(
												"p",
												null,
												"\"It was a pleasure to work with Sayo, He is very dedicated, creative with an eye for detail, i thorough professional, He more than exceeded our expectations...would totally recommend\""
										),
										React.createElement(
												"p",
												null,
												"James Doe"
										),
										React.createElement(
												"a",
												{ href: "https://www.google.com" },
												"www.google.com"
										)
								),
								React.createElement(
										"div",
										{ className: "info" },
										React.createElement(
												"p",
												null,
												"\"It was a pleasure to work with Sayo, He is very dedicated, creative with an eye for detail, i thorough professional, He more than exceeded our expectations...would totally recommend\""
										),
										React.createElement(
												"p",
												null,
												"John Doe"
										),
										React.createElement(
												"a",
												{ href: "https://www.google.com" },
												"www.google.com"
										)
								)
						)
				)
		);
}

function Blog(props) {
		return React.createElement(
				"div",
				{ className: "blog" },
				React.createElement(
						"div",
						{ className: "writeup" },
						React.createElement(
								"h3",
								null,
								"OUR BLOG"
						),
						React.createElement("div", { className: "underline" }),
						React.createElement(
								"p",
								null,
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
						)
				),
				React.createElement(Posts, { title: "Lorem ipsum dolor sit amet",
						image: "Images/background.jpg",
						date: "10 April 2014",
						message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" }),
				React.createElement(PostsR, { title: "Lorem ipsum dolor sit amet",
						image: "Images/background.jpg",
						date: "10 April 2014",
						message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" }),
				React.createElement(Posts, { title: "Lorem ipsum dolor sit amet",
						image: "Images/background.jpg",
						date: "10 April 2014",
						message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt" }),
				React.createElement(
						"div",
						{ className: "all" },
						React.createElement(
								"h4",
								null,
								"All Post"
						)
				)
		);
}
function Posts(props) {
		return React.createElement(
				"div",
				{ className: "posts row justify-content-center" },
				React.createElement("img", { src: props.image, className: "col-md-4" }),
				React.createElement(
						"div",
						{ className: "info col-md-5" },
						React.createElement(
								"p",
								{ className: "date" },
								props.date
						),
						React.createElement(
								"h4",
								null,
								props.title
						),
						React.createElement(
								"p",
								null,
								props.message
						)
				)
		);
}
function PostsR(props) {
		return React.createElement(
				"div",
				{ className: "posts postsr row justify-content-center" },
				React.createElement(
						"div",
						{ className: "info col-md-4" },
						React.createElement(
								"p",
								{ className: "date" },
								props.date
						),
						React.createElement(
								"h4",
								null,
								props.title
						),
						React.createElement(
								"p",
								null,
								props.message
						)
				),
				React.createElement("img", { src: props.image, className: "col-md-5" })
		);
}

{/*Contact Us Page*/}
function Contact(props) {
		return React.createElement(
				"div",
				{ className: "contact " },
				React.createElement(
						"h3",
						null,
						"CONTACT"
				),
				React.createElement(
						"form",
						{ className: "col-md-8" },
						React.createElement(
								"div",
								{ className: "column row col-md-12" },
								React.createElement(
										"div",
										{ className: "form-item col" },
										React.createElement("input", { type: "text", name: "name", required: true }),
										React.createElement(
												"label",
												{ "for": "name" },
												"Name*"
										)
								),
								React.createElement(
										"div",
										{ className: "form-item col " },
										React.createElement("input", { type: "email", name: "email", required: true }),
										React.createElement(
												"label",
												{ "for": "email" },
												"Email*"
										)
								)
						),
						React.createElement(
								"div",
								{ className: "form-item " },
								React.createElement("textarea", { name: "message", className: "col-12" }),
								React.createElement(
										"label",
										{ "for": "email" },
										"Message"
								)
						),
						React.createElement("hr", null),
						React.createElement(
								"button",
								{ type: "submit", className: "btn btn-outline-secondary" },
								"Submit"
						)
				)
		);
}

{/*footer section */}
function Footer(props) {
		return React.createElement(
				"div",
				{ className: "footer row justify-content-center align-items-center" },
				React.createElement(
						"div",
						{ className: "company col" },
						React.createElement(
								"h2",
								null,
								"Logo"
						),
						React.createElement(
								"p",
								null,
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis",
								React.createElement("br", null),
								React.createElement("br", null),
								"nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non"
						)
				),
				React.createElement(
						"div",
						{ className: "recent col-md-3" },
						React.createElement(
								"h6",
								null,
								"RECENT POSTS"
						),
						React.createElement(Footposts, { date: "March 11, 2020", post: " Duis aute irure dolor in reprehenderit in" }),
						React.createElement(Footposts, { date: "March 11, 2020", post: " Duis aute irure dolor in reprehenderit in" }),
						React.createElement(Footposts, { date: "March 11, 2020", post: " Duis aute irure dolor in reprehenderit in" })
				),
				React.createElement(
						"div",
						{ className: "feeds col-md-3" },
						React.createElement(
								"h6",
								null,
								"TWITTER FEEDS"
						),
						React.createElement(Feeds, { time: "About 2 days ago", post: " You did an amazing job", user: "@sayoDaGenius" }),
						React.createElement(Feeds, { time: "About 2 days ago", post: " You did an amazing job", user: "@sayoDaGenius" }),
						React.createElement(Feeds, { time: "About 2 days ago", post: " You did an amazing job", user: "@sayoDaGenius" })
				),
				React.createElement(
						"div",
						{ className: "address  col-md-3" },
						React.createElement(
								"h6",
								null,
								"OUR ADDRESS"
						),
						React.createElement(
								"p",
								null,
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis"
						),
						React.createElement(
								"ul",
								{ className: "info" },
								React.createElement(
										"li",
										null,
										React.createElement("i", { "class": "fa fa-location-arrow" }),
										"23 Pinkett hill drive, detroit"
								),
								React.createElement(
										"li",
										null,
										React.createElement("i", { "class": "fa fa-phone" }),
										"+2347039299606"
								),
								React.createElement(
										"li",
										null,
										React.createElement("i", { "class": "fa fa-envelope" }),
										"shizzman@gmail.com"
								)
						)
				)
		);
}
function Creator(props) {
		return React.createElement(
				"div",
				{ className: "creator" },
				React.createElement(
						"h6",
						null,
						"Engineered By STL \xA9 2020 All Rights Reserved"
				)
		);
}
function Footposts(props) {
		return React.createElement(
				"div",
				{ className: "footposts" },
				React.createElement(
						"p",
						{ className: "date" },
						props.date
				),
				React.createElement(
						"p",
						{ className: "post" },
						props.post
				)
		);
}
function Feeds(props) {
		return React.createElement(
				"div",
				{ className: "feed" },
				React.createElement(
						"p",
						{ className: "info" },
						React.createElement(
								"span",
								{ "class": "time" },
								props.time
						),
						React.createElement(
								"span",
								{ "class": "user" },
								props.user
						)
				),
				React.createElement(
						"p",
						{ className: "post" },
						props.post
				)
		);
}
function App(props) {
		return React.createElement(
				"div",
				{ className: "app" },
				React.createElement(Nav, null),
				React.createElement(Banner, null),
				React.createElement(Wwd, null),
				React.createElement(Skills, null),
				React.createElement(Recents, null),
				React.createElement(Twitter, null),
				React.createElement(Team, null),
				React.createElement(Reviews, null),
				React.createElement(Blog, null),
				React.createElement(Contact, null),
				React.createElement(Footer, null),
				React.createElement(Creator, null)
		);
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));