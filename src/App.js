import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const Header = () => <header className="header">Page Title - Header</header>;
const Footer = () => <footer className="footer">Page Footer - Author</footer>;
const Main = ({ children }) => (
	<main className="main container">{children}</main>
);
Main.propTypes = {
	children: PropTypes.node.isRequired,
};

const Article = props => {
	const { article } = props;
	const { title, subTitle, sections } = article;

	return (
		<article className="article" key={article.id}>
			<h1 className="article__title">{title}</h1>
			<hr></hr>
			<h2 className="article__subtitle">{subTitle}</h2>
			{sections.map(section => {
				return (
					<section className="article__section" key={section.id}>
						{section.paragraphs.map((paragraph, index) => {
							return (
								<ReactMarkdown
									key={index}
									escapeHtml={false}
									source={paragraph}
								/>
							);
						})}
					</section>
				);
			})}
		</article>
	);
};
Article.propTypes = {
	imageId: PropTypes.number,
	article: PropTypes.object.isRequired,
};

const Section = props => (
	<section className="content-section">{props.children}</section>
);
Section.propTypes = {
	children: PropTypes.node.isRequired,
};

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
	const { articles } = require('./content/articles.js');

	return (
		<div className="app-content">
			<Header></Header>
			<Layout>
				<Sidebar />
				<Main>
					{articles.map(article => (
						<Section key={article.id}>
							{articles && <Article article={article}></Article>}
						</Section>
					))}
				</Main>
			</Layout>
			<Footer></Footer>
		</div>
	);
};

export default App;
