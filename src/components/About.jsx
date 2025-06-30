import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const About = () => {
	useGSAP(() => {
		const titleSplit = SplitText.create("#about h2", {
			type: "words",
		});

		const scrollTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: "#about",
				start: "top center",
			},
		});
		scrollTimeline
			.from(titleSplit.words, {
				opacity: 0,
				duration: 1,
				yPercent: 100,
				ease: "expo.out",
				stagger: 0.02,
			})
			.from(
				".top-grid div, .bottom-grid div",
				{
					opacity: 0,
					duration: 1,
					ease: "power1.inOut",
					stagger: "0.04",
				},
				"-=0.5"
			);
	});

	return (
		<div className="" id="about">
			<div className="mb-16 md:px-0 px-5">
				<div className="content">
					<div className="md:col-span-8">
						<p className="badge">Best Cocktails</p>
						<h2 className="">
							Where every detail matters{" "}
							<span className="text-white">-</span>
							from muddle to garnish
						</h2>
					</div>
					<div className="sub-content">
						<p>
							Every cocktail we serve is a reflection of our
							obsession with detail — from the first muddle to the
							final garnish. That care is what turns a simple
							drink into something truly memorable.
						</p>
						<div>
							<p className="md:text-3xl text-xl ">
								<span>4.5</span>/5
							</p>
							<p className="text-white-100 text-sm">
								More than 1000 reviews
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="top-grid">
				<div className="md:col-span-3">
					<div className="noisy">
						<img src="/images/abt1.png" alt="" />
					</div>
				</div>
				<div className="md:col-span-6">
					<div className="noisy">
						<img src="/images/abt2.png" alt="" />
					</div>
				</div>
				<div className="md:col-span-3">
					<div className="noisy">
						<img src="/images/abt5.png" alt="" />
					</div>
				</div>
			</div>
			<div className="bottom-grid">
				<div className="md:col-span-8">
					<div className="noisy">
						<img src="/images/abt2.png" alt="" />
					</div>
				</div>
				<div className="md:col-span-4">
					<div className="noisy">
						<img src="/images/abt4.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
