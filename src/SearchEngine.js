import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <form>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Change location"
            className="form-control"
            autoFocus="on"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-secondary w-100"
          />
        </div>
      </div>
    </form>
  );
}
