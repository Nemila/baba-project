import Image from "next/image";

const SpecialistDetails = async () => {
  return (
    <div className="container grid grid-cols-12 flex-col gap-4 px-4 py-8">
      <div className="col-span-4 flex flex-col gap-4">
        <h3 className="text-2xl font-bold">Specialist Details</h3>

        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="w-24 rounded">
              <Image
                src={`https://avatarfiles.alphacoders.com/375/375590.png`}
                width={500}
                height={500}
                alt=""
              />
            </div>
          </div>

          <div>
            <p>Lamine Diamoutene</p>
            <p>pridila.2006@gmail.com</p>
            <p>Cardiologie</p>
          </div>
        </div>

        <form action="/appointments/book" className="flex">
          <input
            required
            type="hidden"
            name="specialistId"
            contentEditable={false}
            value={`2`}
          />
          <button className="btn btn-primary w-full">Make Appointment</button>
        </form>
      </div>

      <div className="prose col-span-8">
        <h3>Description</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          mollitia beatae adipisci, odit, soluta earum, facilis ipsum molestiae
          rem sapiente velit corporis. Sequi beatae voluptates et quaerat
          repellendus neque voluptatibus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Autem in alias temporibus necessitatibus neque
          repellat provident accusamus, amet qui esse, id ipsam! Non, animi quo
          accusamus facere et quasi temporibus. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Sit et quisquam voluptatum placeat,
          expedita doloribus vel magnam facilis sequi? Officiis consequatur
          perferendis pariatur qui, necessitatibus ducimus porro ad cumque
          dicta?
        </p>
      </div>
    </div>
  );
};

export default SpecialistDetails;
