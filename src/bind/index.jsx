import { guns } from './guns';
import { Bindings } from './bindings';
import './styles.css';

export const Bind = ({ binds, selectedKey, children }) => (
  <div className="binds">
    <Bindings {...{ binds, selectedKey }} />
    {Object.keys(guns).map((type) => (
      <div className="bindings" key={type} style={{ gridArea: type }}>
        <h3>{type}</h3>
        <div className="equipment">{guns[type].map(children)}</div>
      </div>
    ))}
  </div>
);
