import { useState } from "preact/hooks";
import { motion, MagicMotion } from "framer-motion";
import { screens } from "./data";

export default function App() {
  const [selected, setSelected] = useState(0);

  return (
    <MagicMotion>
      <ol>
        {screens.map(({ title, color }, i) => (
          <motion.li
            magic
            key={i}
            className={`title ${i === selected && "selected"}`}
            style={{ color: i === selected ? color : "#333" }}
            onClick={() => setSelected(i)}
          >
            {i === selected && (
              <motion.div
                magicId="underline"
                className="underline"
                style={{ backgroundColor: color }}
              />
            )}
            {title}
          </motion.li>
        ))}
      </ol>
    </MagicMotion>
  );
}
