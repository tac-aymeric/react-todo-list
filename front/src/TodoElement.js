import React, { PureComponent } from 'react';

export default class TodoElement extends PureComponent {
  render() {
    const { done, content, id, onDoneChange = x=>x} = this.props;
    const checkboxId = 'check'+id;

    return <div className="row">
      <div className="col-lg-6">
        <div className="input-group" onClick={() => onDoneChange(id, !done)}>
          <span className="input-group-addon">
            <input type="checkbox" 
              checked={done}
              id={checkboxId}
            />
          </span>
          <span type="text" className={"form-control" + (done ? " strike" : "")} aria-label="...">
          {content}
          </span>
        </div>
      </div>
    </div>
    
    //   <label className="form-check-label" htmlFor={checkboxId} className={done ? "strike" : ""}>
    //     <input 
    //       type="checkbox" 
          
    //     /> 
    //     {content}
    //   </label>
    // </div>
  }
}
