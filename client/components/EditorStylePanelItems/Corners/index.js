import React, { Component } from 'react'

class Corners extends Component {
	render() {
		return (
			<div name="corners" key="corners">
				<label>
					<input type="radio" name="rb_4" value="corners" />
					<span>
									<svg
										className="symbol symbol-cornersDesign"
										width="14"
										height="14"
										viewBox="0 0 14 14"
									>
										<path
											fillRule="evenodd"
											d="M10.54 13.5H8v-2h2.54c.63 0 1.46-.62 1.46-1.08V7.5h2v2.92c0 1.73-1.86 3.08-3.46 3.08zM12 2.42c0-.42-.79-.92-1.46-.92H8v-2h2.54C12.18-.5 14 .7 14 2.42V5.5h-2V2.42zm-12 8V7.5h2v2.92c0 .49.09 1.08.54 1.08H6v2H2.54C1 13.5 0 12.29 0 10.42zm2-8V5.5H0V2.42C0 .62.97-.5 2.54-.5H6v2H2.54c-.23 0-.54 0-.54.92z"></path>
									</svg>
									<span className="tab-text">Уголки</span>
								</span>
					<hr className="divider-long " />
				</label>
			</div>
		)
	}
}

export default Corners