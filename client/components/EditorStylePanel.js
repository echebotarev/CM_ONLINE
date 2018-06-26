import React, { Component } from 'react'

class EditorStylePanel extends Component {
	render() {
		return (
			<div className='style-panel-container'>
				<div className="content-container flex-child">
					<div className="control-tabs-vertical closed">
						<div name="fill">
							<label>
								<input type="radio" name="rb_4" value="fill" />
								<span>
									<svg
										className="symbol symbol-fillDesign"
										width="11"
										height="15"
										preserveAspectRatio="xMidYMid"
										viewBox="0 0 11 15"
									>
										<path
											id="path-1"
											fill-rule="evenodd"
											d="M5.464-.006S-.01 4.116-.01 8.703c0 3.062 2.505 5.292 5.497 5.292s5.451-2.23 5.451-5.292c0-4.587-5.474-8.709-5.474-8.709zm-.526 11.001c-1 0-2-1.12-2-2.5 0-1.381 1-2.5 2-2.5v5z"
											className="cls-2"
										></path>
									</svg>
									<span className="tab-text">Цвета и прозрачность</span>
								</span>
								<hr className="divider-long " />
							</label>
						</div>
						<div name="border">
							<label>
								<input type="radio" name="rb_4" value="border" />
								<span>
									<svg
										className="symbol symbol-borderDesign"
										width="14"
										height="14"
										viewBox="0 0 14 14"
									>
										<path
											fill-rule="evenodd"
											d="M12.15 8.04V5.36h2v2.68h-2zm-1.3-6v-2c1.66 0 3 1.35 3 3h-2c0-.55-.44-1-1-1zM5.55-.04h3.2v2h-3.2v-2zm3.2 14h-3.2v-2h3.2v2zm-8.9-2.92h2c0 .55.45 1 1 1v2c-1.65 0-3-1.34-3-3zm2.3-2.8h-2V5.36h2v2.88zm-.3-5.2h-2c0-1.65 1.35-3 3-3v2c-.55 0-1 .45-1 1zm10 8h2c0 1.66-1.34 3-3 3v-2c.56 0 1-.45 1-1z"
										></path>
									</svg>
									<span className="tab-text">Граница</span>
								</span>
								<hr className="divider-long " />
							</label>
						</div>
						<div name="corners">
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
											fill-rule="evenodd"
											d="M10.54 13.5H8v-2h2.54c.63 0 1.46-.62 1.46-1.08V7.5h2v2.92c0 1.73-1.86 3.08-3.46 3.08zM12 2.42c0-.42-.79-.92-1.46-.92H8v-2h2.54C12.18-.5 14 .7 14 2.42V5.5h-2V2.42zm-12 8V7.5h2v2.92c0 .49.09 1.08.54 1.08H6v2H2.54C1 13.5 0 12.29 0 10.42zm2-8V5.5H0V2.42C0 .62.97-.5 2.54-.5H6v2H2.54c-.23 0-.54 0-.54.92z"></path>
									</svg>
									<span className="tab-text">Уголки</span>
								</span>
								<hr className="divider-long " />
							</label>
						</div>
						<div name="shadow">
							<label>
								<input type="radio" name="rb_4" value="shadow" />
								<span>
									<svg
										className="symbol symbol-shadowDesign"
										width="15"
										height="15"
										viewBox="0 0 15 15"
									>
										<path
											fill-rule="evenodd"
											d="M11.5 14.5h-8v-2h8c.55 0 1-.45 1-1v-9h2v9c0 1.65-1.35 3-3 3zm-3-4h-7c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2z"></path>
									</svg>
									<span className="tab-text">Тень</span>
								</span>
								<hr className="divider-long " />
							</label>
						</div>
						<div name="text">
							<label>
								<input type="radio" name="rb_4" value="text" />
								<span>
									<svg
										className="symbol symbol-textDesign"
										width="14"
										height="13"
										viewBox="0 0 14 13"
									>
										<path
											fill-rule="evenodd"
											d="M10.5-.5h-8c-1.65 0-3 1.35-3 3v2h2v-2c0-.55.45-1 1-1h3v9h-2v2h6v-2h-2v-9h3c.55 0 1 .45 1 1v2h2v-2c0-1.65-1.35-3-3-3z"
										></path>
									</svg>
									<span className="tab-text">Текст</span>
								</span>
								<hr className="divider-long " />
							</label>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default EditorStylePanel