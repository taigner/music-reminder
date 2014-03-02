/**
 * @jsx React.DOM
 */
var MusicRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.music.artist}</td>
        <td>{this.props.music.song}</td>
      </tr>
    );
  }
});

var MusicTable = React.createClass({
  render: function() {
    var rows = [];
    this.props.music.forEach(function(music) {
      rows.push(<MusicRow music={music} key={music.id} />);
    });

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Artist</th>
            <th>Song</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
});

var SearchBar = React.createClass({
  render: function() {
    return (
      <form>
        <input className="form-control" type="text" placeholder="Search" />
      </form>
    );
  }
});

var FilterableMusicTable = React.createClass({
  getInitialState: function() {
    return {music: []};
  },

  fetchMusic: function() {
    $.ajax({
      url: this.props.url,
      success: function(data) {
        this.setState({music: data});
      }.bind(this),
    });
  },

  componentWillMount: function() {
    this.fetchMusic();
  },

  render: function() {
    return (
      <div id="music" className="container">
        <div className="page-header">
          <h1>Music Reminder</h1>
        </div>
        <SearchBar />
        <MusicTable music={this.state.music} />
      </div>
    );
  }
});

React.renderComponent(<FilterableMusicTable url="/music" />, document.body);
