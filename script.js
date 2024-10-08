const pages = [
  `1. <strong>The Beginning</strong><br><br>
  In the warmth of unspoken words,<br>
  Two souls found a bond unchained—<br>
  One basking in sunlight’s glow,<br>
  The other, in shadows, remained.<br>
  Together they crafted a balance,<br>
  In silence, they found their place,<br>
  No labels to bind their connection,<br>
  Just the comfort of shared space.`,

  `2. <strong>The Quiet Bonds</strong><br><br>
  What words could ever explain this?<br>
  One heart beats loud, the other a whisper,<br>
  Yet both echo in the same quiet room,<br>
  Where light calls to the soft,<br>
  And the soft answers back.<br>
  No terms, no promises, just a thread—<br>
  A connection woven in the spaces<br>
  Where two worlds collide and grow anew.`,

  `3. <strong>The Storm of Others</strong><br><br>
  But peace is fragile, and shadows creep,<br>
  Into this sanctuary, doubt takes root,<br>
  An old presence re-emerges,<br>
  Stirring echoes of past disputes.<br>
  Once understanding reigned in silence,<br>
  Now uncertainty fills the air,<br>
  Words become barbs, sharp and cruel,<br>
  In the silence, distrust lays bare.`,

  `4. <strong>Unraveling</strong><br><br>
  Wounds caused by words unmeant,<br>
  Burn deep, tearing at the seams.<br>
  The past haunts the present,<br>
  An old voice disguised, pulling strings.<br>
  What is loyalty when truth is blurred?<br>
  What is trust when the heart is torn?<br>
  In the space between hurt and healing,<br>
  A fragile bond is worn.`,

  `5. <strong>The Goodbye</strong><br><br>
  Goodbye was never meant to be final,<br>
  Spoken in the heat of a bruised exchange.<br>
  Could walking away mend the fractures?<br>
  What if the one you return to<br>
  No longer waits, no longer yearns?<br>
  In a moment, hope flickers dim,<br>
  Could the past fade, and the bond strengthen,<br>
  Or will the shadows always win?`,

  `6. <strong>The Struggle Within</strong><br><br>
  The weight of care now heavy,<br>
  Too much for this tender heart.<br>
  To love one deeply is a burden,<br>
  When caring for many feels light.<br>
  Can I walk away, knowing the damage?<br>
  But how to stay, when I’ve said goodbye?<br>
  Pulled in two directions, lost in the fog,<br>
  When trust crumbles, can it ever revive?`,

  `7. <strong>The End... or Not?</strong><br><br>
  So here it lingers, a frayed connection,<br>
  Held too long, swayed by the past.<br>
  Silence fills the space between,<br>
  Not comforting, but heavy with ghosts—<br>
  Questions, regrets, and shadows of what was.<br>
  Some bonds endure through the pain,<br>
  But this one hangs in the balance,<br>
  Only time will show its true refrain.`,

  `8. <strong>EVERMORE</strong><br><br>
  Once we stood between worlds,<br>
  Building a sanctuary in the quiet.<br>
  Now that silence feels different—<br>
  Harsher, colder, yet echoes remain.<br>
  In the shadows of what we built,<br>
  A thread still connects us,<br>
  Whispering in the dark,<br>
  Reminding us of the love that was.`
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
