'use strict'
const _ = require('lodash')
const Cat = require('mongoose').model('Cat')
module.exports = app => {

  /* Create */
  app.post('/cat', async (req, res) => {
    try {
      const newCat = new Cat(req.body)
      await newCat.save()
      res.json({ info: 'cat created successfully' })
    } catch (e) {
      res.json({
        info: 'error during cat create',
        error: e
      })
    }
  })

  /* Read */ 
  app.get('/cat', async (req, res) => {
    try {
      const cats = await Cat.find()
      res.json({ info: 'cat found successfully', data: cats })
    } catch (e) {
      res.json({
        info: 'error during cat find',
        error: e
      })
    }
  })

  app.get('/cat/:id', async (req, res) => {
    try {
    const cat = await Cat.findById(req.params.id)
      res.json({ info: 'cat found successfully', data: cat })
    } catch (e) {
      res.json({
        info: 'error during cat find',
        error: e
      })
    }
  })

  /* Update */
  app.put('/cat/:id', async(req, res) => {
    try {
      const cat = await Cat.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
      )
        res.json({ info: 'cat update successfully', data: cat })
      } catch (e) {
        res.json({
          info: 'error during cat update',
          error: e
        })
      }
  })

  /* Delete */
  app.delete('/cat/:id', async (req, res) => {
    try {
      const cat = await Cat.findOneAndRemove(
        { _id: req.params.id }
      )
        res.json({ info: 'cat delete successfully', data: cat })
    } catch (e) {
      res.json({
        info: 'error during cat delete',
        error: e
      })
    }
  })
}

