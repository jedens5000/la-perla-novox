import React from "react";

export default function Menu() {
  return (
    <div id="menu">
      <h1>Authentic homemade italian cuisine</h1>
      <hr />

      <h2 className="menu-header">Antipasti (Appetizers)</h2>
      <h4>Burrata con Prosciutto $16</h4>
      <p>
        Fresh creamy mozzarella, thinly sliced Parma prosciutto, marinated
        roasted peppers
      </p>
      <h4>Carpaccio di Manzo alla Piemontese $16</h4>
      <p>
        Thin slices of raw filet mignon, arugula leaves, shaved imported
        Parmigiano, e.v.o.o. and capers
      </p>
      <h4>Caprese con Peperoni $14</h4>
      <p>
        Fresh burrata cheese, fresh tomatoes and red roosted peppers drizzled
        with balsamic reduction
      </p>
      <h4>Calamari dorati con zucchine e gamberi $18</h4>
      <p>
        Flour dusted tender calamari, shrimp and zucchini fried to a golden
        brown served with classic tomato dipping sauce
      </p>
      <h4>Rollatina di Melanzane $14</h4>
      <p>
        Egg battered eggplant stuffed with ricotta cheese, topped with tomato
        sauce, fresh mozzarella and parmesan cheese
      </p>
      <h4>Polpettine con Ricotta $12</h4>
      <p>
        House made meatball over tomato sauce served with a scoop of ricotta
        cheese
      </p>
      <h4>Bruschetta $8</h4>
      <p>
        Toasted italian bread topped with chopped tomatoes, garlic, basil,
        e.v.o.o.
      </p>
      <hr />
      <h2 className="menu-header">Zuppe del Giorno (Soup of the day)</h2>
      <h4>Pasta e Fagioli $8</h4>
      <p>Cannellini and Kidney beans with small pasta</p>
      <h4>Stracciatella $8</h4>
      <p>Chicken broth, spinach, baby meatballs, egg drop</p>
      <h4>Zuppetta di Cozze e Vongole $18</h4>
      <p>
        Little neck clams and black mussels, fresh tomato sauce and seafood
        broth,garlic and italian parsley
      </p>
      <hr />
      <h2 className="menu-header">Insalate Delizia (Gourmet Salads)</h2>
      <h3 className="menu-header">Top your Salad</h3>
      <h4 className="menu-header">
        Chicken $7 | Shrimp $14 | Salmon $12 | Ahi Tuna $12
      </h4>
      <h4>Insalata "La Perla" $11</h4>
      <p>
        Mixed green, tomatoes, red onion, carrots, kalamata olives, accompanied
        by dried cranberries, gorgonzola cheese and walnuts in raspberry
        vinaigrette
      </p>
      <h4>Classic Caesar Salad $8</h4>
      <p>Romaine lettuce, croutons, parmesan cheese, creamy Caesar dressing</p>
      <h4>Insalata di Rucola $9</h4>
      <p>
        Arugula leaves, shaved parmesan cheese, fresh orange slices, walnuts,
        grape tomatoes in lemon vinaigrette
      </p>
      <h4>Insalatina Mista $8</h4>
      <p>
        Organic mix greens, tomatoes, carrots, red onion and black olives tossed
        with lemon vinaiglrette
      </p>
      <hr />
      <h2 className="menu-header">Contorni (Sides)</h2>
      <h4>Spinaci in Padella $8</h4>
      <p>Fresh baby spinach sautéed in garlic an extra virgin olive oil</p>
      <h4>Side of penne or spaghetti $8</h4>
      <p>Choice of sauce: Alfredo, Marinara, Vodka sauce</p>
      <h4>Potato or vegetables of the day $8</h4>
      <p>Ask your server for our daily fresh vegetables and potato selection</p>
      <h4>Broccoli Saltati $8</h4>
      <p>Fresh broccoli floret with garlic and extra virgin olive oil</p>
      <hr />
      <h2 className="menu-header">
        {" "}
        Paste Fresche (House made Pastas) and Classic Recipes{" "}
      </h2>
      <p className="menu-header">
        Gluten free pasta available upon request. Special dietary restriction
        might be accommodated. Inform your server of any food allergies.
      </p>
      <h4> Fettuccine Bolognese $25 </h4>
      <p>
        {" "}
        Fresh ground beef in a traditional meat sauce over house made fettuccine{" "}
      </p>
      <h4> Gnocchi Burratina $23 </h4>
      <p>
        {" "}
        House made potato dumpling over fresh tomato sauce and fresh basil
        topped with burrata mozzarella{" "}
      </p>
      <h4> Gnocchi della Nonna $25 </h4>
      <p>
        {" "}
        House made potato dumpling, tossed with baby meatballs, sweet peas,
        prosciutto and mushrooms over tomato sauce{" "}
      </p>
      <h4> Pappardelle Boscaiola $28 </h4>
      <p>
        {" "}
        House made wide noodles tossed in a creamy porcini mushrooms sauce{" "}
      </p>
      <h4> Strozzapreti Norcina $28 </h4>
      <p> Twisted noodles, crumbled sausage and creamy tomato sauce </p>
      <h4>
        {" "}
        Tagliatelle Nere alla Pescatore ( Black squid ink tagliatelle) $33{" "}
      </h4>
      <p>
        {" "}
        Fresh diced salmon, clams, mussels, shrimp and calamari, sautéed in
        white wine and lightly spiced garlic marinara sauce over ink of squid
        tagliatelle (Available over spaghetti){" "}
      </p>
      <h4> Ravioli di Aragosta $28 </h4>
      <p>
        {" "}
        Lobster ravioli served over creamy saffron sauce with baby spinach and
        shrimps{" "}
      </p>
      <h4> Linguine Vongole Marechiaro $28 </h4>
      <p>
        {" "}
        Classic recipe of fresh clams tossed in e.v.o.o. and garlic with a touch
        of white wine and fresh chopped tomato{" "}
      </p>
      <h4> Spaghetti Napoletana $18 </h4>
      <p> Classic tomato sauce, fresh garlic, e.v.o.o.and basil </p>
      <hr />
      <h2 className="menu-header"> Risotto (Italian Style Rice) </h2>
      <h4> Risotto ai Porcini $28 </h4>
      <p> Italian Porcini mushrooms, parmesan cheese, black truffle </p>
      <h4> Risotto del Giorno $MP </h4>
      <p> Ask your server for our daily special risotto </p>
      <hr />
      <h2 className="menu-header">Entrées</h2>
      <p className="menu-header">
        {" "}
        All our entrées are served with fresh vegetables and potatoes.
        Substitutions might require additional charges.{" "}
      </p>
      <h2 className="menu-header">
        {" "}
        Pollo (Chicken) | Vitello (Veal) | Carne (Meat){" "}
      </h2>
      <h4> Pollo alla Milanese $25 </h4>
      <p>
        {" "}
        Tender chicken breast, breaded and golden fried, topped with arugula
        salad, fresh grape tomatoes and red onion in a lemon vinaigrette{" "}
      </p>
      <h4> Pollo alla Fiorentina $25 </h4>
      <p>
        {" "}
        Tender chicken breast, baby spinach, sun dried tomatoes, melted
        mozzarella, garlic cream sauce{" "}
      </p>
      <h4> Pollo al Limone $25 </h4>
      <p>
        {" "}
        Pan Roasted tender chicken breast, lemon, white wine and butter sauce{" "}
      </p>
      <h4> Pollo alla Toscana $25 </h4>
      <p>
        {" "}
        Chicken breast,white wine and garlic,artichoke hearts, capers, black
        olives and fresh copped tomatoes{" "}
      </p>
      <h4> Vitello Piccata $30 </h4>
      <p>
        {" "}
        Veal scaloppine sautéed with garlic and white wine in a lemon and butter
        sauce with capers{" "}
      </p>
      <h4> Vitello al Marsala $30 </h4>
      <p>
        {" "}
        Tender veal scaloppine, sautéed with mushrooms and Marsala wine in a
        brown gravy sauce{" "}
      </p>
      <h4> Saltimbocca alla Romana $30 </h4>
      <p>
        {" "}
        Veal scaloppine topped with Parma ham and fontina cheese in a butter and
        fresh sage sauce{" "}
      </p>
      <h4> Lombata di maiale alla Valdostana $31 </h4>
      <p>
        {" "}
        12 oz bone in pork chop, simple grilled topped with our famous porcini
        mushroom cream sauce (available stuffed with prosciutto and fontina
        cheese){" "}
      </p>
      <hr />
      <h2 className="menu-header"> I Pesci (Seafood Entrée) </h2>
      <h4> Salmone alla Vodka e Pepe Rosa $26 </h4>
      <p>
        {" "}
        Pan roasted fresh salmon fillet, pink peppercorn, creamy vodka sauce{" "}
      </p>
      <h4> Filetto di Platessa Amalfi $28 </h4>
      <p>
        {" "}
        Francese style flounder filet in a lemon and white wine sauce exalted by
        sun dried tomato, artichoke and capers with a touch of garlic{" "}
      </p>
      <h4> Tonno alla Mediterranea $26 </h4>
      <p>
        {" "}
        Ahi tuna steak, marinated with Italian herbs and spices, simple grilled,
        suggested rare{" "}
      </p>
      <h4> Fresh catch of the day $MP </h4>
      <p> Ask your server about our fresh fish of the day </p>
      <hr />
      <p>
        *For parties of 8 or more, an automatic 20% gratuity will be added to
        the final check. Please inform your server for separate checks.
      </p>
    </div>
  );
}
