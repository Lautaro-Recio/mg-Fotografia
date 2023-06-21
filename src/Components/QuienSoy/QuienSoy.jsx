import fotografaRandom from "../assets/fotografaRandom.jpeg";

export default function QuienSoy() {
  return (
    <div className="">
      <h4 className="text-4xl text-center bold m-4">¿Quien soy?</h4>
      <div className="grid grid-cols-2 ">
        <div className="sticky flex justify-center items-center">
          <p className="p-14 m-4 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            eum mollitia provident praesentium suscipit recusandae excepturi, a
            repudiandae qui pariatur nam dolores rerum eius adipisci nesciunt ab
            necessitatibus! In, quidem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur deserunt repellat ipsa neque veritatis, placeat unde? Asperiores blanditiis impedit nobis atque tempora, delectus deserunt pariatur, esse id tenetur ratione quaerat! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum nam sapiente eligendi. Eaque perferendis voluptates, hic animi eligendi cumque sit, non quia, sequi rerum rem eum neque commodi totam voluptas!
            Rerum vel veniam commodi obcaecati harum. Dolore esse cupiditate illo pariatur dignissimos molestiae temporibus veritatis ad fuga impedit delectus, odio repellat accusamus magni hic. Voluptatibus quo sapiente minus eius voluptatem!
            Unde vero veritatis est ea perferendis magnam. Debitis nesciunt distinctio sapiente eius veritatis laborum mollitia eveniet incidunt, aut molestiae quia animi at magnam porro laudantium tempore modi. Temporibus, tempora quas.
            Consequatur eum ad blanditiis esse? Molestiae officiis quidem, dolores cumque fugiat expedita! Veritatis, dignissimos! Quia facilis commodi reiciendis magni maiores ea amet asperiores, fugit excepturi, non sint cupiditate modi quidem?
          </p>
        </div>
        <div>
          <img loading="lazy" src={fotografaRandom} alt="" />
        </div>
      </div>
    </div>
  );
}
