import React from 'react';
import PropTypes from 'prop-types';

const Header = () => <header className="header">Page Title - Header</header>;
const Footer = () => <footer className="footer">Page Footer - Author</footer>;
const Main = ({ children }) => (
	<main className="main container">{children}</main>
);
Main.propTypes = {
	children: PropTypes.node.isRequired,
};

const Article = ({ imageId = 1070 }) => (
	<article className="article">
		<h1>Hello World.</h1>
		<hr></hr>
		<h2>The is a boiler plate react app</h2>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi odio
			fuga dolores odit, mollitia veniam voluptate quasi maxime doloremque
			tenetur? Unde molestiae asperiores reiciendis quaerat eos at
			aspernatur molestias totam.
		</p>
		<p>
			Vitae quia ipsam in modi omnis soluta perferendis unde, qui facilis
			ducimus, suscipit animi corporis quidem eveniet, rerum aliquam
			quibusdam vero sunt quae repellendus? Veniam autem quaerat nihil et
			nostrum?
		</p>
		<p>
			Amet officiis nulla excepturi sit necessitatibus illum quisquam
			architecto doloribus perspiciatis ut voluptatem voluptas, et magnam
			ab non deserunt. Voluptatem dolorem rerum error ipsum inventore a
			adipisci eum ea quod?
		</p>
		<img
			className="article__image"
			src={`https://unsplash.it/900/400?image=${imageId}`}
			alt="random"
		/>
		<p>
			Saepe ipsam culpa a id sunt consequatur, rerum, consectetur dolorem
			natus minima minus autem explicabo tempore, assumenda dolor ipsum
			vitae quos voluptas? Enim quae tempore officiis nobis laudantium
			recusandae minima?
		</p>
	</article>
);
Article.propTypes = {
	imageId: PropTypes.number,
};

const Section = () => (
	<section className="content-section">
		<Article imageId={1071 + Math.floor(Math.random() * 12)} />
		<button className="comment-button">Comment</button>
	</section>
);

const Sidebar = () => (
	<aside className="sidebar">
		<nav>
			<ul>
				<li>
					<a className="sidebar__link" href="#1">
						App
					</a>
				</li>
				<li>
					<a className="sidebar__link" href="#2">
						Profile
					</a>
				</li>
				<li>
					<a className="sidebar__link" href="#3">
						About
					</a>
				</li>
				<li>
					<a className="sidebar__link" href="#4">
						Contact
					</a>
				</li>
			</ul>
		</nav>
	</aside>
);

const Layout = ({ children }) => (
	<div className="layout">
		<div className="side-padding"></div>
		{children}
		<div className="side-padding"></div>
	</div>
);
Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

const App = () => {
	return (
		<div className="app-content">
			<Header></Header>
			<Layout>
				<Sidebar />
				<Main>
					<Section></Section>
					<Section></Section>
					<Section></Section>
				</Main>
			</Layout>
			<Footer></Footer>
		</div>
	);
};

export default App;
