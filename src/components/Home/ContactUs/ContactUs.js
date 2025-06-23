import React from 'react';

const ContactUs = () => (
    
    <section className="f-section f-section--contact" style={{"marginTop" : "-15%"}}>
 <div className="a-container a-gap--m a-stack f-section__container"  id="contact">
    <div className="a-flex a-flex--align-start a-gap-col--xxl:m">
        <div className="a-flex__item--100 a-flex__item--auto:m">
            <h2 className="a-gap--s a-stack">
                <span className="f-text--balance f-text--gradient">Looking for a Partner in Web Design &amp; Development?</span>
            </h2>
            
        </div>
        <div className="a-flex__item--100 a-flex__item:m">
            <a className="a-button a-button--xl f-aurora f-border f-button f-button--emboss f-button--main" href="#contact">
                <span className="f-aurora__content">Become a Partner</span>
                <span aria-hidden="true" className="f-aurora__background"></span>
            </a>
        </div>
    </div>
    <div className="a-flex a-flex--align-start a-gap-col--xxl:m">
    
            <div className="a-flex__item--100 a-flex__item--100:m" >
                <form
                    action="#contact"
                    className="f-form f-form--contact js-form"
                    id="form-contact"
                    method="post"
                >
                    <div aria-hidden="true" className="f-form__loading js-form__loading">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon loader"
                            height="44"
                            viewBox="0 0 44 44"
                            width="44"
                        >
                            <g fill="none" fillRule="evenodd" stroke="#fff" strokeWidth="2">
                                <circle cx="22" cy="22" r="1">
                                    <animate
                                        attributeName="r"
                                        begin="0s"
                                        calcMode="spline"
                                        dur="1.8s"
                                        keySplines="0.165, 0.84, 0.44, 1"
                                        keyTimes="0; 1"
                                        repeatCount="indefinite"
                                        values="1; 20"
                                    ></animate>
                                    <animate
                                        attributeName="stroke-opacity"
                                        begin="0s"
                                        calcMode="spline"
                                        dur="1.8s"
                                        keySplines="0.3, 0.61, 0.355, 1"
                                        keyTimes="0; 1"
                                        repeatCount="indefinite"
                                        values="1; 0"
                                    ></animate>
                                </circle>
                                <circle cx="22" cy="22" r="1" stroke="#fff">
                                    <animate
                                        attributeName="r"
                                        begin="-0.9s"
                                        calcMode="spline"
                                        dur="1.8s"
                                        keySplines="0.165, 0.84, 0.44, 1"
                                        keyTimes="0; 1"
                                        repeatCount="indefinite"
                                        values="1; 20"
                                    ></animate>
                                    <animate
                                        attributeName="stroke-opacity"
                                        begin="-0.9s"
                                        calcMode="spline"
                                        dur="1.8s"
                                        keySplines="0.3, 0.61, 0.355, 1"
                                        keyTimes="0; 1"
                                        repeatCount="indefinite"
                                        values="1; 0"
                                    ></animate>
                                </circle>
                            </g>
                        </svg>
                    </div>
                    <div className="f-form__response js-form__response"></div>
                    <header className="f-form__header">
                        <h2>Contact Us</h2>
                    </header>
                    <div className="a-flex a-gap-col--m:m a-gap-row--s:m a-gap-row--xs">
                        <div className="a-flex__item--100 a-flex__item--50:m">
                            <div className="a-field f-field">
                                <label className="f-label" htmlFor="f-name">
                                    Name <abbr className="f-required" title="Required">✻</abbr>
                                </label>
                                <input
                                    aria-required="true"
                                    autoComplete="name"
                                    className="f-input"
                                    id="f-name"
                                    name="f-name"
                                    placeholder="Fill in the name and surname ..."
                                    required
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="a-flex__item--100 a-flex__item--50:m">
                            <div className="a-field f-field">
                                <label className="f-label" htmlFor="f-email">
                                    Email <abbr className="f-required" title="Required">✻</abbr>
                                </label>
                                <input
                                    aria-required="true"
                                    autoComplete="email"
                                    className="f-input"
                                    id="f-email"
                                    name="f-email"
                                    placeholder="Fill in the email address ..."
                                    required
                                    type="email"
                                    
                                />
                            </div>
                        </div>
                        <div className="a-flex__item--100">
                            <div className="a-field f-field">
                                <label className="f-label" htmlFor="f-message">
                                    Message <abbr className="f-required" title="Required">✻</abbr>
                                </label>
                                <textarea
                                    aria-required="true"
                                    className="f-input f-textarea"
                                    id="f-message"
                                    name="f-message"
                                    placeholder="Fill in the message ..."
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <input className="f-recaptcha js-recaptcha" name="recaptcha" type="hidden" />
                    <input
                        className="f-recaptcha__k js-recaptcha__k"
                        name="recaptcha_k"
                        type="hidden"
                        value="6LeScsEqAAAAACEez2PuaM7TU5ShN1mx_qBb3Nhx"
                    />
                    <div className="a-gap--s a-stack a-stack--align-center f-form__submit">
                        <div className="f-form__note">
                        </div>
                        <button
                            className="a-button a-button--accent a-button--icon a-button--icon-end a-button--xl f-button f-form--submit"
                            name="f-form--submitted"
                            type="submit"
                            value="true"
                        >
                            Send
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="icon"
                                fill="none"
                                focusable="false"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                            >
                                <path
                                    d="M10 14L14 22L21 3L2 10L10 14ZM10 14L14 10"
                                    stroke="#FFFFF0"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </svg>
                        </button>
                    </div>
                    <input name="f-form" type="hidden" value="contact" />
                    <input name="f-form-name" type="hidden" value="Contact" />
                    <input name="f-number" type="hidden" value="250616191574" />
                    <input name="f-title" type="hidden" value="Contact" />
                    <input name="f-url" type="hidden" value="#contact/" />
                    <input id="f-contact-nonce" name="f-contact-nonce" type="hidden" value="efdafffc89" />
                    <input name="_wp_http_referer" type="hidden" value="/contact/" />
                </form>
            </div>
            </div>
</div>
</section>

);

export default ContactUs;