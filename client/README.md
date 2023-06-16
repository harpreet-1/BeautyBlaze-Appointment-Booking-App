**Pages**

- Home
- Login
- Signup

user - > login -> signup

routes

<Routes>
<Route path="/">
   <Route path="/login" element=<Navbar/>>
   <Route path="/signup" element=<Navbar/>>
   <Route path="/services/:queryName" element=<Services/>
   <Route path="/single" element=<Single/>
   <Route path="/payment" element=<Single/>
</Route>

<Route path="/business" element=<Business/>>
<Route path="/dashboard" element=<Dashoboard/>/>
<Route path="/addService" element=<Dashoboard/>/>
<Route path="/apponitment" element=<Dashoboard/>/>
<Route path="/EditServices" element=<Dashoboard/>/>
<Route path="/deleteService" element=<Dashoboard/>/>

</Route>

</Routes>

{
image: url,
type: haircut,beauty,pedicure,medicure
cost : price,
desc: string,
mobile: number,
review: calculation,
reviewCount: number
days: {
sun ""
mon
tue
...
sat
}
}
