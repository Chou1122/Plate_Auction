import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
    return (
        <AnimatedCursor
            innerStyle={{ background: "#233876" }}
            outerStyle={{ background: "white", mixBlendMode: "exclusion" }}
            color="#fff"
            innerSize={8}
            outerSize={50}
            innerScale={2}
            outerScale={1.7}
            outerAlpha={0.5}
            clickables={[
                'a',
                'input',
                'label[for]',
                'select',
                'textarea',
                'button',
                {
                    target: '.social, .cursor-default',
                    outerStyle: { background: "transparent" },
                    outerSize: 0,
                    outerScale: 0
                }
            ]}
        />
    )
}