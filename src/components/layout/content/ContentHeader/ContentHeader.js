import React, { Component } from "react";
import BreadCrumbs from "../../../common/BreadCrumbs/BreadCrumbs";
import ActionLink from "../../../common/ActionLink";
import { Link } from "react-router-dom";
import ContentHeaderTitle from "../ContentHeaderTitle/ContentHeaderTitle";

class ContentHeader extends Component {
  render() {
    const { actionLinks } = this.props;
    let actionLinksContent;

    if (actionLinks !== undefined && Object.keys(actionLinks).length > 0) {
      actionLinksContent = actionLinks.map((actionLink, index) =>
        actionLink.path !== undefined ? (
          <li class="nav-item" key={index}>
            <Link
              className={`${actionLink.className}`}
              to={`${actionLink.path}`}
            >
              <i class={`${actionLink.icon}`} />
              {actionLink.text}
            </Link>
          </li>
        ) : (
          <li class="nav-item" key={index}>
            <ActionLink
              className={`${actionLink.className}`}
              onClick={actionLink.action}
            >
              <i class={`${actionLink.icon}`} />
              {actionLink.text}
            </ActionLink>
          </li>
        )
      );
    }

    return (
      <div className="row">
        <div className="col" style={{ background: "#f0f0f0" }}>
          <BreadCrumbs {...this.props} />

          <div className="d-flex flex-row justify-content-between">
            <ContentHeaderTitle {...this.props} />

            <div class="d-flex flex-row align-items-center m-r-20">
              <ul class="navbar-nav d-flex flex-row">{actionLinksContent}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentHeader;
