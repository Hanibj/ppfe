<div className="App">
<div className="appAside" />
<div className="appForm">
  <div className="pageSwitcher">
    <NavLink
      to="/sign-in"
      activeClassName="pageSwitcherItem-active"
      className="pageSwitcherItem"
    >
      Sign In
    </NavLink>
    <NavLink
      exact
      to="/"
      activeClassName="pageSwitcherItem-active"
      className="pageSwitcherItem"
    >
      Sign Up
    </NavLink>
  </div>

  <div className="formTitle">
    <NavLink
      to="/sign-in"
      activeClassName="formTitleLink-active"
      className="formTitleLink"
    >
      Sign In
    </NavLink>{" "}
    or{" "}
    <NavLink
      exact
      to="/"
      activeClassName="formTitleLink-active"
      className="formTitleLink"
    >
      Sign Up
    </NavLink>
  </div>

  <Route exact path="/" component={SignUpForm} />
  <Route path="/sign-in" component={SignInForm} />
</div>
</div>