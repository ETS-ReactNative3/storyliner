import React, { Component } from 'react';
import { Rail, Sticky } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {

    super(props)

    this.state = {
      isLoaded: false,
      data: [],
      title: '',
      subtitle: '',
      input: window.location.search.replace('?source=',''),
      source: window.location.search.replace('?source=',''),
      contextRef: null,
      scroll: parseInt(window.location.hash.replace('#', ''), 10)
    }

    this.handleContextRef = this.handleContextRef.bind(this)

  }

  csv2Obj(text) {
    const lines = text.split('\n')
    const headers = lines[1].split(',')
    let result = []

    for (let i = 2; i < lines.length; i++){
      let obj = {quote: []}
      let author = ''
      const columns = lines[i].split(',')

      headers.forEach((header, index) => {
        if (header === '_quote_author') {
          author = columns[index]
        } else if (header === 'quote_content') {
          if (columns[index].length !== 0) {
            obj.quote = columns[index].split(';').map((q) => {
              return {author: author, content: q}
            })
          }
        } else {
          obj[header] = columns[index]
        }
      })

      // when the date colume is empty, merge quotes
      if (obj.date.length === 0) {
        result[result.length - 1].quote = result[result.length - 1].quote.concat(obj.quote)
      } else {
        result.push(obj)
      }
    }

    return result
  }

  csv2Title(text) {
    const titles = text.split('\n')[0].split(',')
    return {
      title: titles[0],
      subtitle: titles[1]
    }
  }

  getData() {
    if (this.state.source.length > 0) {
    fetch(this.state.source)
      .then((respond) => {
        respond.text().then(text => {
          this.setState({
            title: this.csv2Title(text).title,
            subtitle: this.csv2Title(text).subtitle,
            data: this.csv2Obj(text),
            isLoaded: true
          })
        })
      })
      .catch(error => console.error(error))
    }
  }

  onInput(e) {
    this.setState({input: e.target.value})
  }

  onSubmit() {
    window.location.assign(`?source=${this.state.input}`)
  }

  scroll(index) {
    this.setState({scroll: index})
  }

  scrollReset(direction) {
    this.setState({scroll: ''})
    window.history.pushState({}, '', window.location.pathname + window.location.search)
    if (direction === 'top') {
      window.scrollTo(0, 0)
    } else if (direction === 'bottom') {
      window.scrollTo(0, window.document.body.scrollHeight)
    }
  }

  handleContextRef(contextRef) {
    this.setState({ contextRef })
  }

  componentDidMount() {
    this.getData()
  }

  render() {

    let title, subtitle, body 
    let Menu = [], Relation = []

    if (this.state.data.length === 0) {
      title = 'Storyliner'
      subtitle = 'The Interactive Gossip Viewer'
      body = (
        <div style={{display: 'flex'}} >
          <div style={{width: '4rem', flex: 'none'}}>
          </div>
          <div style={{margin: '2rem auto', flexGrow: '1'}} >
          <div className='ui fluid action input' >
            <input type='text' placeholder='Your data source here... (.csv file)' onChange={e => {this.onInput(e)}} value={this.state.input} />
            <button className='ui teal button' onClick={e => {this.onSubmit()}}>Submit</button>
          </div>
          </div>
          <div style={{flex: 'none', width: '3rem'}} >
          </div>
        </div>
      )

    } else {
      title = this.state.title
      subtitle = this.state.subtitle
      const renderQuote = (quotes) => {
        if (quotes.length === 0) {
          return
        }
        const quotesJSX = quotes.map((data, index) => (
          <blockquote key={index} >
            <i className='quote left icon' />
            <i className='quote right icon' />
            {data.content}
            <span className='Author'>— {data.author}</span>
          </blockquote>
        ))
        return(
          <div className='ui secondary segment'>
            {quotesJSX}
          </div>
        )
      }

      Relation = this.state.data.map((content, index) => {

        const isActive = this.state.scroll === index ? 'active': ''

        let time = ''
        if (content.time.length > 0) {
          time = (
          <span className='Menu-timestamp'>
          {content.time}
          </span>
          )
        }
        Menu.push(
          <a key={index} href={`#${index}`} className={`item ${isActive}`} onClick={() => this.scroll(index)} >
            {content.date}
            {time}
          </a>
        )

        let Note = (
          <div className='five wide column'>
          </div>
        )
        if (content.note.length > 0) {
          Note = (
            <div className='five wide column'>
              <h4 className='Note-header ui dividing teal header'>
                圍觀筆記
              </h4>
              <p className='Note-content'>
              {content.note}
              </p>
            </div>
          )
        }

        return (
          <article key={index} id={index}>
          <div className='ui two column stackable grid' >
            <div className='eleven wide column'>
            <div className={`Relation ui segments ${isActive}`}>
              <div className='ui segment'>
                <p>
                  <a className='ui large horizontal label' data-role={content._subject}>
                    {content._subject}
                  </a>
                  <span>
                  {content.action}
                  </span>
                  <a className='ui large horizontal label' data-role={content._object}>
                    {content._object}
                  </a>
                  <span>
                  {content.content_topic}
                  </span>
                </p>
                <p className='description'>
                  {content.via}{content.channel}{content.content_carrier} — <a href={content["ref_url"]} target='_blank' rel='noopener noreferrer'>
                  {content.ref_title.length > 0 ?
                    content.ref_title : content.ref_url}
                  </a>
                </p>
              </div>
              {renderQuote(content.quote)}
            </div>
            </div>
            {Note}
          </div>
          </article>
        )
      })
      body = (
        <div className='Relation-wrapper' ref={this.handleContextRef}>
          <Rail position='left' style={{width: '4rem', padding: '0', margin: '1rem 0 0 0'}} >
          <Sticky context={this.state.contextRef} pushing={true}>
            <nav className='ui vertical fluid secondary tiny pointing pink menu'>
              <a className='item' onClick={() => this.scrollReset('top')} >
                <i className='icon up chevron' style={{float: 'none', opacity: '0.5'}} />
              </a>
              {Menu}
              <a className='item' onClick={() => this.scrollReset('bottom')} >
                <i className='icon down chevron' style={{float: 'none', opacity: '0.5'}} />
              </a>
            </nav>
          </Sticky>
          </Rail>
          {Relation}
        </div>
      )
    }
    return (
      <div className="App">
        <header className='App-header'>
        <div className='wrapper ui container' style={{display: 'flex'}} >
          <a href='/storyliner/' style={{flex: 'none'}}>
          <img src={logo} alt="logo" className='ui image App-logo' />
          </a>
          <h1 className="ui header" style={{flexGrow: '1', margin: '0'}} >
              <span className='App-name' >
                {title}
              </span>
              <div className='sub header App-description'>
                {subtitle}
              </div>
          </h1>
          <div style={{flex: 'none'}} >
            <i className='icon bars' style={{margin: '0.7rem 0 0 0', opacity: '0.5', fontSize: '1.5rem'}} />
          </div>
        </div>
        </header>
        <main className="App-body ui container">
          {body}
        </main>
        <hr className='ui divider' />
        <footer className='App-footer' >
        <div className='ui center aligned container'>
          <div className='wrapper'>
            <p>
            Yet another open data experiment by ETBlue.
            <br />
            <a href='https://github.com/ETBlue/storyliner' target='_blank' rel='noopener noreferrer'>
              <i className='icon code' />
              Source code
            </a>
            <a href='https://etblue.github.io/storyliner/?source=https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8ukLhLNcPLc20_7J2ju6_e_KSLW2RW0LDu_1_4__IvaVUCO1BhZ9RGwefcWkOVRQ8XjlYv6MSe8oA/pub?output=csv' target='_blank' rel='noopener noreferrer'>
              <i className='icon globe' />
              Sample page
            </a>
            <a href='https://docs.google.com/spreadsheets/d/1w8IAAl2JZhqpmLIxJ8GWNO6KT0CQxM4wCnnIPpGvLPM/edit?usp=sharing' target='_blank' rel='noopener noreferrer'>
              <i className='icon table' />
              Sample data
            </a>
            </p>
          </div>
        </div>
        </footer>
      </div>
    );
  }
}

export default App;
