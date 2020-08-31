import React, {Component} from 'react';
import {Carousel, Input, Tabs, Icon} from 'antd';

class Home extends Component {
	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
	}
	next() {
		this.slider.slick.slickNext();
	}
	prev() {
		this.slider.slick.slickPrev();
	}
	render() {
		const lunboSetting = {
			dots: true,
			lazyLoad: true,
			autoplay:true,
		};
		return (
			<div className="home-lunbo">
				<Carousel {...lunboSetting} ref={el => (this.slider = el)}>
					<div key={1}><h3>1</h3></div>
					<div key={2}><h3>2</h3></div>
					<div key={3}><h3>3</h3></div>
					<div key={4}><h3>4</h3></div>
				</Carousel>
				<Icon type="left-circle"onClick={this.prev}/>
				<Icon type="right-circle" onClick={this.next}/>
			</div>
		)
	}
}

export default Home;