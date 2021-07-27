import * as React from "react";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/lora/400.css";
import "../css/styles.css";

// markup
const IndexPage = () => {
  return (
    <main className="limiter">
      <title>Erik v Kalifornii</title>
      <h1>Erik v Kalifornii</h1>
      <p>
        Představte si, že jste dostali možnost studovat půl roku, v oblasti,
        která je světoznámá, kvůli vašemu koníčku. Tak přesně tohle budu
        dokumentovat, normální život kluka, který miluje programování, v
        Kalifornii, místě technologického nekonečna.
      </p>
      <div className="articleBox">
        <div className="article">
          <a href="#">
            <img src="http://placekitten.com/200/300" alt="test" />
            <h2>Článek 1</h2>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              harum, libero magni aut quis voluptas pariatur in, inventore
              debitis atque aliquid nesciunt itaque, ullam voluptates possimus
              facere deleniti perspiciatis hic.
            </p>
            <div className="meta">
              <span>27. 6. 2020 - 8 min</span>
            </div>
          </a>
        </div>
        <div className="article">
          <a href="#">
            <img src="http://placekitten.com/300/300" alt="test" />
            <h2>Článek 1</h2>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              harum, libero magni aut quis voluptas pariatur in, inventore
              debitis atque aliquid nesciunt itaque, ullam voluptates possimus
              facere deleniti perspiciatis hic.
            </p>
            <div className="meta">
              <span>27. 6. 2020 - 8 min</span>
            </div>
          </a>
        </div>
        <div className="article">
          <a href="#">
            <img src="http://placekitten.com/400/200" alt="test" />
            <h2>Článek 1</h2>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              harum, libero magni aut quis voluptas pariatur in, inventore
              debitis atque aliquid nesciunt itaque, ullam voluptates possimus
              facere deleniti perspiciatis hic.
            </p>
            <div className="meta">
              <span>27. 6. 2020 - 8 min</span>
            </div>
          </a>
        </div>
        <div className="article">
          <a href="#">
            <img src="http://placekitten.com/200/300" alt="test" />
            <h2>Článek 1</h2>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              harum, libero magni aut quis voluptas pariatur in, inventore
              debitis atque aliquid nesciunt itaque, ullam voluptates possimus
              facere deleniti perspiciatis hic.
            </p>
            <div className="meta">
              <span>27. 6. 2020 - 8 min</span>
            </div>
          </a>
        </div>
        <div className="article">
          <a href="#">
            <img src="http://placekitten.com/200/300" alt="test" />
            <h2>Článek 1</h2>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              harum, libero magni aut quis voluptas pariatur in, inventore
              debitis atque aliquid nesciunt itaque, ullam voluptates possimus
              facere deleniti perspiciatis hic.
            </p>
            <div className="meta">
              <span>27. 6. 2020 - 8 min</span>
            </div>
          </a>
        </div>
        <div className="article">
          <a href="#">
            <img src="http://placekitten.com/600/300" alt="test" />
            <h2>Článek 1</h2>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              harum, libero magni aut quis voluptas pariatur in, inventore
              debitis atque aliquid nesciunt itaque, ullam voluptates possimus
              facere deleniti perspiciatis hic.
            </p>
            <div className="meta">
              <span>27. 6. 2020 - 8 min</span>
            </div>
          </a>
        </div>
        <div className="article">
          <a href="#">
            <img src="http://placekitten.com/500/300" alt="test" />
            <h2>Článek 1</h2>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              harum, libero magni aut quis voluptas pariatur in, inventore
              debitis atque aliquid nesciunt itaque, ullam voluptates possimus
              facere deleniti perspiciatis hic.
            </p>
            <div className="meta">
              <span>27. 6. 2020 - 8 min</span>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
