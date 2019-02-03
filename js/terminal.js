$(function() {
  var data = [
  {
    action: 'type',
    strings: ["Resumable Symbolic Execution"],
    output: '<span class="gray">Frank Busse</span><br>&nbsp;',
    postDelay: 1000
  }

];
  runScripts(data, 0);
});

function runScripts(data, pos) {
    var prompt = $('.prompt'),
        script = data[pos];
    if(script.clear === true) {
      $('.historyterm').html('');
    }
    switch(script.action) {
        case 'type':
          // cleanup for next execution
          prompt.removeData();
          $('.typed-cursor').text('');
          prompt.typed({
            strings: script.strings,
            typeSpeed: 30,
            callback: function() {
              var historyterm = $('.historyterm').html();
              historyterm = historyterm ? [historyterm] : [];
              historyterm.push('$ ' + prompt.text());
              if(script.output) {
                historyterm.push(script.output);
                prompt.html('');
                $('.historyterm').html(historyterm.join('<br>'));
              }
              // scroll to bottom of screen
              $('section.terminal').scrollTop($('section.terminal').height());
              // Run next script
              pos++;
              if(pos < data.length) {
                setTimeout(function() {
                  runScripts(data, pos);
                }, script.postDelay || 1000);
              }
            }
          });
          break;
        case 'view':

          break;
    }
}
