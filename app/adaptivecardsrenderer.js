var jsonData = null;

function setHostConfig(adaptiveCards) {
  debugger;
  adaptiveCards.hostConfig = new AdaptiveCards.HostConfig({
    supportsInteractivity: true,
    fontFamily: 'Segoe UI',
    fontSizes: {
      small: 12,
      'default': 14,
      medium: 17,
      large: 21,
      extraLarge: 26
    },
    fontWeights: {
      lighter: 200,
      'default': 400,
      bolder: 600
    },
    imageSizes: {
      small: 40,
      medium: 80,
      large: 160
    },
    containerStyles: {
      'default': {
        foregroundColors: {
          'default': {
            normal: '#333333',
            subtle: '#EE333333'
          },
          accent: {
            normal: '#FF2E89FC',
            subtle: '#882E89FC'
          },
          good: {
            normal: '#54a254',
            subtle: '#DD54a254'
          },
          warning: {
            normal: '#e69500',
            subtle: '#DDe69500'
          },
          attention: {
            normal: '#FF3300',
            subtle: '#DDcc3300'
          }
        },
        backgroundColor: '#00000000'
      },
      emphasis: {
        foregroundColors: {
          'default': {
            normal: '#333333',
            subtle: '#EE333333'
          },
          accent: {
            normal: '#2E89FC',
            subtle: '#882E89FC'
          },
          good: {
            normal: '#54a254',
            subtle: '#DD54a254'
          },
          warning: {
            normal: '#e69500',
            subtle: '#DDe69500'
          },
          attention: {
            normal: '#cc3300',
            subtle: '#DDcc3300'
          }
        },
        backgroundColor: '#08000000'
      }
    },
    spacing: {
      small: 3,
      'default': 8,
      medium: 20,
      large: 30,
      extraLarge: 40,
      padding: 20
    },
    separator: {
      lineThickness: 1,
      lineColor: '#EEEEEE'
    },
    actions: {
      maxActions: 5,
      spacing: 'Default',
      buttonSpacing: 10,
      showCard: {
        actionMode: 'Inline',
        inlineTopMargin: 16,
        style: 'Emphasis'
      },
      preExpandSingleShowCardAction: false,
      actionsOrientation: 'Horizontal',
      actionAlignment: 'Stretch'
    },
    adaptiveCard: {
      allowCustomStyle: false
    },
    imageSet: {
      imageSize: 'Medium',
      maxImageHeight: 'maxImageHeight'
    },
    factSet: {
      title: {
        size: 'Default',
        color: 'Default',
        isSubtle: false,
        weight: 'Bolder',
        warp: true
      },
      value: {
        size: 'Default',
        color: 'Default',
        isSubtle: false,
        weight: 'Default',
        warp: true
      },
      spacing: 10
    }
  });
  debugger;
}

function renderCard(targetDiv) {
    var htmlElement = new AdaptiveCards.AdaptiveCard();
    htmlElement.parse(jsonData);
    setHostConfig(htmlElement);
    var html = htmlElement.render();
    var div = document.getElementById(targetDiv).appendChild(html);
}

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var aLink = document.getElementById('url');
    aLink.href = tabs[0].url;
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var json = xhr.responseText;
      json = json.replace(/^[^(]*\(([\S\s]+)\);?$/, '$1');
      jsonData = JSON.parse(json);
      if (jsonData['$schema'] !== undefined && jsonData['$schema'] === 'http://adaptivecards.io/schemas/adaptive-card.json') {
        renderCard('container');
      } else {
        document.getElementById('container').innerHtml = '<div class="error">This JSON does not seem to be an <a href="http://adaptivecards.io/" target="_blank">Adaptive Card</a>?</div>';
      }
    };
    xhr.open('GET', url);
    xhr.send();
  });
});

AdaptiveCards.AdaptiveCard.onExecuteAction = function (action) {
  var openUrl = false;
  var message = 'Action executed\n';
  message += '    Title: ' + action.title + '\n';

  if (action instanceof AdaptiveCards.OpenUrlAction) {
      message += '    Type: OpenUrl\n';
      message += '    Url: ' + action.url + '\n';
      openUrl = true;
  } else if (action instanceof AdaptiveCards.SubmitAction) {
      message += '    Type: Submit';
      message += '    Data: ' + JSON.stringify(action.data);
  } else if (action instanceof AdaptiveCards.HttpAction) {
      var httpAction = action;
      message += '    Type: Http\n';
      message += '    Url: ' + httpAction.url + '\n';
      message += '    Method: ' + httpAction.method + '\n';
      message += '    Headers:\n';

      for (var i = 0; i < httpAction.headers.length; i++) {
          message += '        ' + httpAction.headers[i].name + ': ' + httpAction.headers[i].value + '\n';
      }

      message += '    Body: ' + httpAction.body + '\n';
  }
  else {
      message += '    Type: <unknown>';
  }

  alert(message);
  if (openUrl) {
    openInNewTab(action.url);
  }
};