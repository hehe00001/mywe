const pages = [
    `1. <strong>The Beginning</strong> – Prose<br><br>
      There was always something unspoken. The kind of bond that doesn’t need labels, a connection beyond words. 
      One lives in the sunlight, basking in the warmth of others, while the other hides in the shade, preferring the comfort of solitude. 
      Together, a balance was struck—quiet and loud, stillness and motion.<br><br>
      When the world became too much, solace was always found in those shared spaces, where no definitions were needed. 
      No titles or expectations. Just being.<br><br>
      It was never about a relationship, not the kind one reads about or sees in the movies. It was deeper—something fragile yet strong enough to weather storms. 
      Even when misunderstandings took root, there was always a way back, always a reconciliation waiting in the wings.`,
  
    `2. <strong>The Quiet Bonds</strong> – Poetry<br><br>
      What words could ever explain?<br>
      One heart that beats too loud, and one that hardly whispers,<br>
      And yet, both echo in the same room.<br>
      The light calls to the quiet, and the quiet answers.<br><br>
      No terms, no promises, but something deeper,<br>
      In the space where two worlds collide and build each other anew.`,
  
    `3. <strong>The Storm of Others</strong> – Prose<br><br>
      And yet, peace is fragile. Into this space, another presence emerged, one with old ties. 
      A shadow from the past, creeping into the silence and planting seeds of doubt. 
      Where once there was understanding, now uncertainty lingers.<br><br>
      The words that came weren’t kind. They stung, like barbs piercing through skin, spoken from a mouth not fully her own. 
      Manipulation hides well behind a familiar face, and in moments of distance, the seeds of distrust grow faster. 
      There’s an ache in the air now, something foreign and heavy.<br><br>
      No one had ever held on like this before. Walking away from others was easy—too easy, even. 
      But now, with the weight of this bond, letting go felt impossible, even as the hurt built higher.`,
  
    `4. <strong>Unraveling</strong> – Poetry<br><br>
      Wounds caused by words unmeant,<br>
      Yet they burn, tearing through what once felt endless.<br>
      The past haunts the present,<br>
      An old voice pretending to be new, pulling strings beneath the surface.<br><br>
      What is loyalty, when truth is blurred?<br>
      What is trust, when the heart is questioned at its core?`,
  
    `5. <strong>The Goodbye</strong> – Prose<br><br>
      Goodbye was never meant to be permanent. It was spoken in the heat of the moment, after too many bruises had been given. 
      Maybe it was thought that walking away would heal the hurt. But what happens when the one you always return to stops waiting for your return?<br><br>
      There was a moment when everything seemed like it could be rebuilt—when the past could fade, and the connection could strengthen again. 
      But shadows lurk, and those who know how to manipulate silence creep back in, creating gaps that were never there before.<br><br>
      The questions returned: loyalty, honesty. They cut deeper now, because they come from the one place that never questioned before.`,
  
    `6. <strong>The Struggle Within</strong> – Poetry<br><br>
      The weight of care is heavy now—<br>
      Too much, maybe, for a heart that loves this way.<br>
      To care so deeply for one, when caring for others never felt this hard.<br><br>
      Can I walk away, knowing what’s been done?<br>
      But how to stay, when I’ve already said goodbye?<br>
      Pulled in two directions, with no path forward clear.<br>
      When trust crumbles, is it ever built again?`,
  
    `7. <strong>The End... or Not?</strong> – Prose<br><br>
      And so, here it lingers. A bond that may never fully break, but one that is fraying at the edges. 
      One held on too long, perhaps, and the other was too easily swayed by the whispers of the past.<br><br>
      Now there’s just silence, but not the comforting kind. 
      A silence filled with questions, regrets, and the ghosts of what once was.<br><br>
      Some connections remain, even through the pain. Whether this one does—only time will tell.`,
  
    `8. <strong>Closing Poem:</strong><br><br>
      There was once a place we stood, between the world and the quiet.<br>
      We built something in the silence, a space only we could understand.<br><br>
      Now the silence feels different—harsher, colder.<br>
      But even now, echoes remain.`
  ];
  
  let currentPage = 1;
  
  function updatePage() {
    document.getElementById("content").innerHTML = pages[currentPage - 1];
    document.getElementById("page-num").innerText = `Page ${currentPage} of 8`;
  }
  
  function prevPage() {
    if (currentPage > 1) {
      currentPage--;
      updatePage();
    }
  }
  
  function nextPage() {
    if (currentPage < 8) {
      currentPage++;
      updatePage();
    }
  }
  
  // Initialize the first page
  window.onload = function () {
    updatePage();
  };
  