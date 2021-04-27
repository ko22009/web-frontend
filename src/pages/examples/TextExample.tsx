import image from "@/pages/examples/image.jpg";
import Image from "@/components/Image";

function TextExample() {
  return (
    <>
      <h4>Text</h4>
      <div>
        <p>
          <div
            className="clearfix"
            style={{
              float: "right",
              marginLeft: "1rem",
            }}
          >
            <Image
              src={image}
              style={{
                width: "200px",
                margin: "0px 1rem 0.5rem 0px",
              }}
            />
          </div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
          doloremque eius, odio saepe sunt tempora ullam vel voluptates. Animi
          dignissimos ducimus fuga id ipsam laborum neque quia quos veniam
          voluptatem.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
          doloremque eius, odio saepe sunt tempora ullam vel voluptates. Animi
          dignissimos ducimus fuga id ipsam laborum neque quia quos veniam
          voluptatem.
        </p>
      </div>
    </>
  );
}

export default TextExample;
