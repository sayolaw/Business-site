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
				React.createElement(Skill, { className: "full", number: "90", skill: "Management" }),
				React.createElement(Skill, { number: "70", skill: "Marketing" }),
				React.createElement(Skill, { number: "63", skill: "Research" }),
				React.createElement(Skill, { number: "87", skill: "Consultancy" }),
				React.createElement(Skill, { number: "23", skill: "Promotion" })
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
								React.createElement("div", { className: "gauge" }),
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
						React.createElement(Member, { name: "TONI LAW", position: "CEO", twitter: "", facebook: "", linkedin: "", image: "Images/member.jpg" }),
						React.createElement(Member, { name: "SAYO LAW", position: "CREATIVE DIRECTOR", twitter: "", facebook: "", linkedin: "", image: "Images/member.jpg" }),
						React.createElement(Member, { name: "TOSIN LAW", position: "CEO", twitter: "", facebook: "", linkedin: "", image: "Images/member.jpg" })
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
				React.createElement(Team, null)
		);
}

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));