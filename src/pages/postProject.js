import React from "react";
import "./postProject.css";
function PostProject() {
  return (
    <div>
      <app-header
        class="ng-star-inserted"
        _ngcontent-webapp-c244=""
        headertext="Tell us what you need done"
        mobilesubheadertext="Pay the freelancer only when you are 100% satisfied with their work."
        subheadertext="
          Contact skilled freelancers within minutes. View profiles, ratings,
          portfolios and chat with them. Pay the freelancer only when you are
          100% satisfied with their work.
        "
        _nghost-webapp-c179=""
      >
        <fl-bit
          class="PagePostProject-header"
          _ngcontent-webapp-c179=""
          _nghost-webapp-c102=""
        >
          <fl-container
            _ngcontent-webapp-c179=""
            _nghost-webapp-c110=""
            size="tablet"
            data-mobile-padding="true"
            data-padding="true"
            data-support-notch="true"
          >
            <fl-bit
              class="PagePostProject-contentContainer"
              _ngcontent-webapp-c179=""
              _nghost-webapp-c102=""
            >
              <fl-bit
                _ngcontent-webapp-c202=""
                _nghost-webapp-c102=""
                data-margin-bottom="small"
                data-margin-bottom-desktop="xlarge"
              ></fl-bit>
              <fl-bit
                _ngcontent-webapp-c202=""
                _nghost-webapp-c102=""
                data-margin-bottom="small"
                data-margin-bottom-desktop="xlarge"
              >
                <fl-link
                  _ngcontent-webapp-c202=""
                  fltrackinglabel="PostJobPageLogo"
                  _nghost-webapp-c125=""
                  data-color="default"
                  data-hover-color="default"
                  data-weight="inherit"
                  data-size="xsmall"
                  data-display="inline"
                >
                  <a
                    _ngcontent-webapp-c125=""
                    class="LinkElement ng-star-inserted"
                    rel=""
                    data-underline="hover"
                    data-display="inline"
                    data-icon="false"
                    data-icon-position="left"
                    target="_self"
                    href="/"
                  >
                    <fl-logo
                      _ngcontent-webapp-c202=""
                      _nghost-webapp-c124=""
                      class="ng-star-inserted"
                    >
                      <picture _ngcontent-webapp-c124="">
                        <source
                          _ngcontent-webapp-c124=""
                          srcset="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo-light.svg"
                          class="ng-star-inserted"
                        />
                        <img
                          _ngcontent-webapp-c124=""
                          alt="Freelancer logo"
                          class="LogoImg"
                          src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo-light.svg"
                          data-size="small"
                        />
                      </picture>
                    </fl-logo>
                  </a>
                </fl-link>
              </fl-bit>
              <fl-bit
                _ngcontent-webapp-c202=""
                _nghost-webapp-c102=""
                data-margin-bottom="small"
                data-margin-bottom-desktop="mid"
              >
                <fl-heading _ngcontent-webapp-c202="" _nghost-webapp-c109="">
                  <h1
                    _ngcontent-webapp-c109=""
                    data-color="light"
                    data-inline="false"
                    data-size="large"
                    data-size-desktop="xlarge"
                    data-truncate="false"
                    data-weight="bold"
                    class="ng-star-inserted"
                  >
                    {" "}
                    Tell us what you need done{" "}
                  </h1>
                </fl-heading>
              </fl-bit>
              <fl-text
                _ngcontent-webapp-c202=""
                class="PagePostProject-header-desc ng-star-inserted"
                _nghost-webapp-c113=""
                data-color="light"
                data-type="paragraph"
                data-read-more="none"
                data-hide-mobile-small="true"
              >
                <div
                  _ngcontent-webapp-c113=""
                  role="paragraph"
                  class="NativeElement ng-star-inserted"
                  data-color="light"
                  data-size="xsmall"
                  data-weight="normal"
                  data-style="normal"
                  data-line-break="false"
                >
                  Contact skilled freelancers within minutes. View profiles,
                  ratings, portfolios and chat with them. Pay the freelancer
                  only when you are 100% satisfied with their work.
                </div>
              </fl-text>
            </fl-bit>
          </fl-container>
        </fl-bit>
      </app-header>
      {/* ############# END OF APP HEADER ################# */}

      <fl-container
        _ngcontent-webapp-c244=""
        _nghost-webapp-c110=""
        size="desktop-large"
        data-mobile-padding="false"
        data-padding="true"
        data-support-notch="true"
      >
        <fl-bit
          class="Container"
          _ngcontent-webapp-c244=""
          _nghost-webapp-c102=""
        >
          <app-form
            _ngcontent-webapp-c244=""
            fltrackingsubsection="PostJobForm"
            _nghost-webapp-c238=""
          >
            <form
              class="ng-untouched ng-pristine ng-invalid"
              _ngcontent-webapp-c238=""
              novalidate=""
            >
              {/* ################## APP TITLE ############### */}
              <app-title
                id="title"
                class="ng-star-inserted"
                _ngcontent-webapp-c238=""
                fltrackingsection="PJPTitle"
                _nghost-webapp-c184=""
              >
                <fl-bit
                  class="SpinnerContainer"
                  _ngcontent-webapp-c184=""
                  _nghost-webapp-c102=""
                >
                  <fl-heading
                    class="ng-star-inserted"
                    _ngcontent-webapp-c184=""
                    _nghost-webapp-c109=""
                    data-margin-bottom="xxxsmall"
                  >
                    <h3
                      _ngcontent-webapp-c109=""
                      data-color="dark"
                      data-inline="false"
                      data-size="mid"
                      data-truncate="false"
                      data-weight="bold"
                      class="ng-star-inserted"
                    >
                      {" "}
                      Choose a name for your project{" "}
                    </h3>
                  </fl-heading>
                </fl-bit>
                <fl-input
                  _ngcontent-webapp-c184=""
                  id="PjpTitleFieldWithDefaultPlaceholder"
                  fltrackinglabel="TextInputField"
                  placeholder="e.g. Build me a website"
                  _nghost-webapp-c183=""
                  class="ng-tns-c183-3 ng-star-inserted"
                  data-margin-bottom="large"
                >
                  <fl-bit
                    _ngcontent-webapp-c183=""
                    class="InputInner ng-tns-c183-3 ng-star-inserted"
                    _nghost-webapp-c102=""
                    data-type="text"
                    data-align="left"
                  >
                    <fl-bit
                      _ngcontent-webapp-c183=""
                      class="InputContainer ng-trigger ng-trigger-shakeAnimation"
                      _nghost-webapp-c102=""
                      data-size="large"
                      data-expanded="false"
                      data-hide-icon="false"
                      data-margin-bottom="none"
                    >
                      <fl-bit
                        _ngcontent-webapp-c183=""
                        class="NativeElementContainer"
                        _nghost-webapp-c102=""
                      >
                        <input
                          _ngcontent-webapp-c183=""
                          class="NativeElement ng-tns-c183-3 ng-untouched ng-pristine ng-invalid ng-star-inserted"
                          id="PjpTitleFieldWithDefaultPlaceholder"
                          type="text"
                          placeholder="e.g. Build me a website"
                          data-align="light"
                          autocomplete="on"
                          data-size="large"
                          data-left-icon-size="mid"
                          data-right-icon-size="mid"
                          data-borderless="false"
                          data-custom-arrows="false"
                        />
                      </fl-bit>
                    </fl-bit>
                  </fl-bit>
                  <fl-validation-error
                    _ngcontent-webapp-c183=""
                    class="ValidationError ng-tns-c183-3"
                    _nghost-webapp-c139=""
                    data-align="left"
                  ></fl-validation-error>
                </fl-input>
              </app-title>
              {/* ################## APP DESCRIPTION ############### */}

              <app-description
                _ngcontent-webapp-c238=""
                fltrackingsection="PJPDescription"
                _nghost-webapp-c187=""
                class="ng-star-inserted"
              >
                <fl-heading
                  _ngcontent-webapp-c187=""
                  _nghost-webapp-c109=""
                  data-margin-bottom="xxxsmall"
                  class="ng-star-inserted"
                >
                  <h3
                    _ngcontent-webapp-c109=""
                    data-color="dark"
                    data-inline="false"
                    data-size="mid"
                    data-truncate="false"
                    data-weight="bold"
                    class="ng-star-inserted"
                  >
                    {" "}
                    Tell us more about your project{" "}
                  </h3>
                </fl-heading>
                <fl-bit
                  _ngcontent-webapp-c187=""
                  _nghost-webapp-c102=""
                  data-margin-bottom="mid"
                >
                  <fl-textarea
                    _ngcontent-webapp-c187=""
                    fltrackinglabel="TextInputField"
                    placeholder="Describe your project here..."
                    _nghost-webapp-c186=""
                    data-margin-bottom="xxxsmall"
                    class="ng-star-inserted"
                  >
                    <textarea
                      _ngcontent-webapp-c186=""
                      flcontrolvalueaccessor=""
                      class="TextArea ng-untouched ng-pristine ng-invalid"
                      data-borderless="false"
                      placeholder="Describe your project here..."
                      data-resize="vertical"
                      rows="4"
                      autocomplete="off"
                    ></textarea>
                    <fl-validation-error
                      _ngcontent-webapp-c186=""
                      _nghost-webapp-c139=""
                    ></fl-validation-error>
                  </fl-textarea>
                  <fl-bit _ngcontent-webapp-c187="" _nghost-webapp-c102="">
                    <fl-text
                      _ngcontent-webapp-c187=""
                      class="CharacterCountContainer"
                      _nghost-webapp-c113=""
                      data-color="mid"
                      data-type="paragraph"
                      data-read-more="none"
                      data-margin-bottom="xxsmall"
                    >
                      <div
                        _ngcontent-webapp-c113=""
                        role="paragraph"
                        class="NativeElement ng-star-inserted"
                        data-color="mid"
                        data-size="xxsmall"
                        data-weight="normal"
                        data-style="normal"
                        data-line-break="false"
                      >
                        {" "}
                        4000 characters remaining{" "}
                      </div>
                    </fl-text>
                  </fl-bit>
                </fl-bit>
                <fl-bit
                  _ngcontent-webapp-c187=""
                  fltrackingsection="PJPDescriptionWarning"
                  _nghost-webapp-c102=""
                  data-margin-bottom="small"
                ></fl-bit>
              </app-description>

              {/* ################## APP FILE-UPLOAD ############### */}

              <app-file-upload
                _ngcontent-webapp-c238=""
                fltrackingsection="PJPFiles"
                _nghost-webapp-c190=""
                class="ng-star-inserted"
              >
                <fl-bit
                  _ngcontent-webapp-c190=""
                  class="FileSelectCustom"
                  _nghost-webapp-c102=""
                >
                  <fl-file-select
                    _ngcontent-webapp-c190=""
                    fltrackinglabel="FileUpload"
                    _nghost-webapp-c188=""
                  >
                    <input
                      _ngcontent-webapp-c188=""
                      title="Drop to attach your file"
                      type="file"
                      class="HiddenInput ng-star-inserted"
                      multiple=""
                    />
                    <fl-bit
                      _ngcontent-webapp-c188=""
                      _nghost-webapp-c102=""
                      class="Content"
                    >
                      <fl-bit
                        _ngcontent-webapp-c190=""
                        fltrackinglabel="FileUpload"
                        class="FileSelectCustom-uploadArea"
                        _nghost-webapp-c102=""
                        data-margin-bottom="small"
                        data-margin-bottom-tablet="none"
                      >
                        <fl-button
                          _ngcontent-webapp-c190=""
                          fltrackinglabel="UploadFile"
                          class="FileSelectCustom-uploadBtn"
                          _nghost-webapp-c107=""
                          data-color="transparent-dark"
                          data-display="inline"
                          data-size="small"
                        >
                          <button
                            _ngcontent-webapp-c107=""
                            tabindex="0"
                            aria-live="assertive"
                            class="ButtonElement ng-star-inserted"
                            type="button"
                            data-color="transparent-dark"
                            data-display="inline"
                          >
                            <fl-icon
                              _ngcontent-webapp-c190=""
                              name="ui-plus-alt"
                              _nghost-webapp-c104=""
                              data-size="xsmall"
                              role="img"
                              class="ng-star-inserted"
                            >
                              <div _ngcontent-webapp-c104="" class="IconInner">
                                <div
                                  _ngcontent-webapp-c104=""
                                  class="IconContainer"
                                  data-color="dark"
                                  data-drop-shadow="false"
                                  data-name="ui-plus-alt"
                                  data-size="xsmall"
                                  aria-hidden="true"
                                >
                                  <svg
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fit=""
                                    preserveAspectRatio="xMidYMid meet"
                                    focusable="false"
                                  >
                                    <g
                                      stroke="none"
                                      stroke-width="1"
                                      fill-rule="evenodd"
                                    >
                                      <polygon
                                        fill="none"
                                        opacity="0"
                                        points="2 2 22 2 22 22 2 22"
                                      ></polygon>
                                      <path d="M15.3333333,8.66666667 L15.3333333,3.11111111 C15.3333333,2.49666667 14.8366667,2 14.2222222,2 L9.77777778,2 C9.16333333,2 8.66666667,2.49666667 8.66666667,3.11111111 L8.66666667,8.66666667 L3.11111111,8.66666667 C2.49666667,8.66666667 2,9.16333333 2,9.77777778 L2,14.2222222 C2,14.8366667 2.49666667,15.3333333 3.11111111,15.3333333 L8.66666667,15.3333333 L8.66666667,20.8888889 C8.66666667,21.5033333 9.16333333,22 9.77777778,22 L14.2222222,22 C14.8366667,22 15.3333333,21.5033333 15.3333333,20.8888889 L15.3333333,15.3333333 L20.8888889,15.3333333 C21.5033333,15.3333333 22,14.8366667 22,14.2222222 L22,9.77777778 C22,9.16333333 21.5033333,8.66666667 20.8888889,8.66666667 L15.3333333,8.66666667 Z"></path>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </fl-icon>{" "}
                            Upload files{" "}
                          </button>
                        </fl-button>
                        <fl-text
                          _ngcontent-webapp-c190=""
                          class="FileSelectCustom-dragDropText"
                          _nghost-webapp-c113=""
                          data-color="mid"
                          data-type="paragraph"
                          data-read-more="none"
                        >
                          <div
                            _ngcontent-webapp-c113=""
                            role="paragraph"
                            class="NativeElement ng-star-inserted"
                            data-color="mid"
                            data-size="xsmall"
                            data-weight="normal"
                            data-style="normal"
                            data-line-break="false"
                          >
                            {" "}
                            Drag &amp; drop any images or documents that might
                            be helpful in explaining your brief here (Max file
                            size: 25 MB).{" "}
                          </div>
                        </fl-text>
                      </fl-bit>
                    </fl-bit>
                    <fl-validation-error
                      _ngcontent-webapp-c188=""
                      _nghost-webapp-c139=""
                    ></fl-validation-error>
                  </fl-file-select>
                </fl-bit>
              </app-file-upload>
            </form>
          </app-form>
        </fl-bit>
      </fl-container>
    </div>
  );
}

export default PostProject;
