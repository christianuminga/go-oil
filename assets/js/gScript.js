$(document).ready(function(e){document.addEventListener("contextmenu",function(e){e.preventDefault()}),document.onkeydown=function(e){return 123!=event.keyCode&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="I".charCodeAt(0))&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="C".charCodeAt(0))&&((!e.ctrlKey||!e.shiftKey||e.keyCode!="J".charCodeAt(0))&&((!e.ctrlKey||e.keyCode!="U".charCodeAt(0))&&void 0))))};var o=1;e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){}),e("#login_button").click(function(){e.LoadingOverlay("show",{image:"",fontawesome:"fa fa-car fa-spin"})}),e("#bookingHistoryButton").click(function(){e.LoadingOverlay("show",{image:"",fontawesome:"fa fa-car fa-spin"})}),e("#logoutButton").click(function(o){o.preventDefault(),e.LoadingOverlay("show",{image:"",fontawesome:"fa fa-car fa-spin"}),setTimeout(function(){window.location.href="logout"},2e3)}),e("#register_button").click(function(){e.LoadingOverlay("show",{image:"",fontawesome:"fa fa-car fa-spin"})}),e("#stepTwoNext").click(function(){e.LoadingOverlay("show",{image:"",fontawesome:"fa fa-car fa-spin"})}),e("#selectedVehicleSubmit").click(function(){e.LoadingOverlay("show",{image:"",fontawesome:"fa fa-car fa-spin"})}),e("#modalDeleteButton").click(function(){localStorage.subTotal=0,e.LoadingOverlay("show",{image:"",fontawesome:"fa fa-car fa-spin"})}),e("#bookquote").click(function(){e.LoadingOverlay("show",{image:"",fontawesome:"fa fa-car fa-spin"})}),e("#submit_franchise").click(function(){e.LoadingOverlay("show",{image:"",fontawesome:"fa fa-car fa-spin"})}),e("#submit_fleet").click(function(){e.LoadingOverlay("show",{image:"",fontawesome:"fa fa-car fa-spin"})}),e("#engineAirFilter").click(function(){alert("ok")}),e("#google_login_redirect").ready(function(){}),e("#navButtonBoy").click(function(){e(".dropdown-menu").slideToggle(400)}),e("#service_p").hide(),e("#addService_p").hide(),e("#infoClick").popover(),e("#confirmChange").click(function(){e("#youSureModal").modal()}),e("#viewSubTotal").click(function(){e("#subtotalModal").modal()}),e("#confSave").click(function(){e.LoadingOverlay("show",{image:"",fontawesome:"fa fa-car fa-spin"})}),e("input[name=vehicleId]").each(function(){var o=e(this).val();e("#deleteVehicle_"+o).click(function(){e("#deleteVehicleModal_"+o).modal(),e("#noSave_"+o).click(function(i){e("#deleteVehicleModal_"+o).modal("hide")})}),e("#selectVehicle_"+o).click(function(){localStorage.subTotal=0})}),e("#stepTwoNext_quoting").click(function(){localStorage.subTotal=0}),e("#stepTwoNext").click(function(){localStorage.subTotal=0}),e("#noSave").click(function(e){e.preventDefault(),window.location.href="account"}),e("#subtotalModalBack").click(function(){e("#subtotalModal").modal("hide")}),e("#noRequest").click(function(){e("#confirmQuotingEmail").modal("hide"),e("#confirmBookingEmail").modal("hide"),e("#confirmFranchiseEmail").modal("hide"),e("#confirmFleetEmail").modal("hide")}),e("#addvehicle_button").click(function(){e("#addVehicleModal").modal()}),e("#editVehicle").click(function(){e("#editVehicleModal").modal()}),e("#engineInfoModal").show(),e("#engineInfoModal").click(function(){e("#engineModal").modal()}),e("#vehicleUnitInfoModal").show(),e("#vehicleUnitInfoModal").click(function(){e("#unitModal").modal()}),e("#oilTypeDropDown").hide(),e("#selectedOilTypeDropDown").hide(),e("#logoutButton").click(function(){localStorage.clear()}),e("#stepTwoNextHeavyBook").click(function(){e("#confirmBookingEmail").modal()}),e("#stepTwoNextHeavyQuote").click(function(){e("#confirmQuotingEmail").modal()}),e("#franchiseSubmit").click(function(){e("#confirmFranchiseEmail").modal()}),e("#fleetSubmit").click(function(){e("#confirmFleetEmail").modal()}),e("#vehicleMakeDropDown").attr("disabled",!0),e("#vehicleModelDropDown").attr("disabled",!0),e("#vehicleEngineDropDown").attr("disabled",!0),e("#card_subtotal").attr("disabled",!0),e("#termsOfService").click(function(){e("#termsOfServiceModal").modal()}),e("#vonigoSubmit").attr("hidden",!0),e("#selectedVehicleSubmit").attr("hidden",!0),e("#viewSubTotal").attr("hidden",!0),e("#totalCalcQuote").attr("hidden",!0);var i=e("#yearErr, #makeErr, #modelErr, #engineErr"),t=e("#yearErrCollapse, #makeErrCollapse, #modelErrCollapse, #engineErrCollapse"),a=e("#vehicleYearDropDown, #vehicleMakeDropDown, #vehicleModelDropDown, #vehicleEngineDropDown");e("#stepTwoNext_quoting").attr("hidden",!0),e("#stepTwoNext").attr("hidden",!0),e(a).each(function(o,a){e(this).focusout(function(){}),e(a).click(function(){e(i[o]).hide(),e(t[o]).collapse("hide")})}),e("#stepTwoNext_checking").click(function(){var o=!1;e(a).each(function(i,n){""==e(a[i]).val()?(e(t[i]).collapse("show"),o=!1):o=!0}),e("#terms_checkbox").is(":checked")?e("#terms_checkbox").is(":checked")&&1==o&&(e.LoadingOverlay("show",{image:"",fontawesome:"fa fa-car fa-spin"}),e("#serviceBooking").submit()):alert("You must agree to our terms of service.")}),e("#stepTwoNext_bookingCheck").click(function(){var o=!1;e(a).each(function(i,n){""==e(a[i]).val()?(e(t[i]).collapse("show"),o=!1):o=!0}),e("#terms_checkbox").is(":checked")?e("#terms_checkbox").is(":checked")&&1==o&&(e.LoadingOverlay("show",{image:"",fontawesome:"fa fa-car fa-spin"}),e("#service_buttons").append('<input type="hidden" name="step" value="stepTwo">'),e("#serviceBooking").submit()):alert("You must agree to our terms of service.")});var n=e("#name, #city, #postalCode, #phoneNumber"),l=e("#edit_name, #edit_city, #edit_postalCode, #edit_phoneNumber");function c(){e("#vehicleMakeDropDown").empty(),e("#vehicleMakeDropDown").html('<option value="">Select Make</option>'),e("#vehicleModelDropDown").empty(),e("#vehicleModelDropDown").html('<option value="">Select Model</option>'),e("#vehicleEngineDropDown").empty(),e("#vehicleEngineDropDown").html('<option value="">Select Engine</option>')}e(l).each(function(o,i){e(i).click(function(){var i=e(n[o]).val();e(n[o]).prop("readOnly")&&(e(n[o]).prop("readOnly",!1),e(n[o]).focus(),e(n[o]).select()),e(n[o]).keypress(function(t){13==t.which&&(t.preventDefault(),e(n[o]).val()!=i&&e("#saveModal").modal({backdrop:"static",keyboard:!1}))}),e(n[o]).focusout(function(){e(n).prop("readOnly",!0),e(n[o]).val()!=i&&(""==e(n[o]).val()?(e("#fieldRequired"+o).collapse("show"),e(n[o]).prop("readOnly",!1),e(n[o]).focus()):e("#saveModal").modal({backdrop:"static",keyboard:!1}))})})}),e("#confirm_addVehicle").click(function(){e.LoadingOverlay("show",{image:"",fontawesome:"fa fa-car fa-spin"})}),e("#email").focusin(function(){e("#email_reg").hide()}),e("#securityAnswer").focusin(function(){e("#securityAnswer_reg").hide()}),e("#name").focusin(function(){e("#name_reg").hide()}),e("#city").focusin(function(){e("#city_reg").hide()}),e("#postalCode").focusin(function(){e("#postal_reg").hide()}),e("#phoneNumber").focusin(function(){e("#phone_reg").hide()}),e("#password").focusout(function(){var o=this.value,i=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,16}$");o.match(i)||""==o?e("#passwordCollapse").collapse("hide"):(e("#passwordCollapse").collapse("show"),e("#password").select())}),e("#password").focusin(function(){e("#password_reg").hide()}),e("#confirmPassword").focusout(function(){e("#password").val()!=this.value?e("#confirmPasswordCollapse").collapse("show"):e("#confirmPasswordCollapse").collapse("hide")}),e("#confirmPassword").focusin(function(){e("#confirmPassword_reg").hide()}),e("#vehicleYearDropDown").change(function(){var o=e(this).val(),i=(e("input[type=hidden]").attr("name"),e("input[type=hidden]").val());""==o?(c(),e("#vehicleMakeDropDown").attr("disabled",!0),e("#vehicleModelDropDown").attr("disabled",!0),e("#vehicleEngineDropDown").attr("disabled",!0)):(c(),e.ajax({url:"booking/get_vehicle_makes",type:"POST",data:{car_year:o,csrf_tkn:i},dataType:"json",success:function(o){e("#vehicleMakeDropDown").html(o)},complete:function(){e("#vehicleMakeDropDown").attr("disabled",!1)}}))}),e("#vehicleMakeDropDown").change(function(){var o=e(this).val(),i=e("#vehicleYearDropDown").val(),t=(e("input[type=hidden]").attr("name"),e("input[type=hidden]").val());""==o?(c(),e("#vehicleModelDropDown").attr("disabled",!0),e("#vehicleEngineDropDown").attr("disabled",!0)):(e("#vehicleModelDropDown").empty(),e("#vehicleModelDropDown").html('<option value="">Select Model</option>'),e("#vehicleEngineDropDown").empty(),e("#vehicleEngineDropDown").html('<option value="">Select Engine</option>'),e.ajax({url:"booking/get_vehicle_models",type:"POST",data:{car_make:o,car_year:i,csrf_tkn:t},dataType:"json",success:function(o){e("#vehicleModelDropDown").html(o)},complete:function(){e("#vehicleModelDropDown").attr("disabled",!1)}}))}),e("#vehicleModelDropDown").change(function(){var o=e(this).val(),i=e("#vehicleMakeDropDown").val(),t=e("#vehicleYearDropDown").val(),a=(e("input[type=hidden]").attr("name"),e("input[type=hidden]").val());""==o?(c(),e("#vehicleMakeDropDown").attr("disabled",!0),e("#vehicleModelDropDown").attr("disabled",!0),e("#vehicleEngineDropDown").attr("disabled",!0)):(e("#vehicleEngineDropDown").empty(),e("#vehicleEngineDropDown").html('<option value="">Select Engine</option>'),e.ajax({url:"booking/get_vehicle_engines",type:"POST",data:{car_make:i,car_model:o,car_year:t,csrf_tkn:a},dataType:"json",success:function(o){e("#vehicleEngineDropDown").html(o)},complete:function(){e("#vehicleEngineDropDown").attr("disabled",!1)}}))}),e("#vehicleEngineDropDown").change(function(){var o,i,t=e("#vehicleYearDropDown").val(),a=e("#vehicleMakeDropDown").val(),n=e("#vehicleModelDropDown").val(),l=e(this).val(),d=(e("input[type=hidden]").attr("name"),e("input[type=hidden]").val());if(""==l)c(),e("#vehicleMakeDropDown").attr("disabled",!0),e("#vehicleModelDropDown").attr("disabled",!0),e("#vehicleEngineDropDown").attr("disabled",!0);else{var r=(i=null,e.ajax({async:!1,global:!1,url:"booking/get_oil_capacity",type:"POST",data:{car_make:a,car_model:n,car_year:t,car_engine:l,csrf_tkn:d},dataType:"json",success:function(o){e("#oilInfo").append('<input type="hidden" name="oil_capacity" value="'+o+'">'),i=o}}),i),s=(o=null,e.ajax({async:!1,global:!1,url:"booking/get_oil_weight",type:"POST",data:{car_make:a,car_model:n,car_year:t,car_engine:l,csrf_tkn:d},dataType:"json",success:function(i){e("#oilInfo").append('<input type="hidden" name="oil_weight" value="'+i+'">'),o=i}}),o);localStorage.oilCap=r,localStorage.oilWeight=s}}),e("#serviceBookingThree").ready(function(){var o=localStorage.oilWeight,i=(e("input[type=hidden]").attr("name"),e("input[type=hidden]").val());e.ajax({async:!1,global:!1,url:"booking/get_oil_types",type:"POST",data:{oil_weight:o,csrf_tkn:i},dataType:"json",success:function(o){e("#oilTypeDropDown").html(o)}}),e.ajax({async:!1,global:!1,url:"booking/get_all_services",type:"POST",data:{csrf_tkn:i},dataType:"json",success:function(o){e("#additionalServices").html(o)}})}),e("#oil_checkbox").click(function(){e(this).is(":checked")?(e("#oilTypeDropDown").show(),e("#oilTypeDropDown").focus()):(e("#oilTypeCollapse").collapse("hide"),localStorage.subTotal=0,e("#oilTypeDropDown").hide(),e("#subTotalCalc").empty(),e("#service").empty(),e("#service_p").hide(),e("#addService").empty(),e("#addService_p").hide(),e("#subTotalCalc").empty(),e("#addService").empty(),e("#addService_p").hide(),e("#vonigo").empty(),e("input[name=addService]").each(function(){this.checked=!1}),e("#oilTypeDropDown").prop("selectedIndex",0),e("#vonigoSubmit").attr("hidden",!0),e("#viewSubTotal").attr("hidden",!0),e("#totalCalcQuote").attr("hidden",!0))}),e("#selectedOil_checkbox").click(function(){e(this).is(":checked")?(e("#selectedOilTypeDropDown").show(),e("#selectedOilTypeDropDown").focus()):(e("#oilTypeCollapse").collapse("hide"),localStorage.subTotal=0,e("#selectedOilTypeDropDown").hide(),e("#subTotalCalc").empty(),e("#service").empty(),e("#service_p").hide(),e("#addService").empty(),e("#addService_p").hide(),e("#subTotalCalc").empty(),e("#addService").empty(),e("#addService_p").hide(),e("#vonigo_selectedVehicle").empty(),e("input[name=addService]").each(function(){this.checked=!1}),e("#selectedOilTypeDropDown").prop("selectedIndex",0),e("#selectedVehicleSubmit").attr("hidden",!0),e("#viewSubTotal").attr("hidden",!0))}),e("#oilTypeDropDown").change(function(){e("#vonigo").empty();var i=e(this).val(),t=localStorage.oilWeight,a=localStorage.oilCap;e("#subTotalCalc").empty(),e("#addService").empty(),e("#addService_p").hide(),e("input[name=addService]").each(function(){this.checked=!1});e("input[type=hidden]").attr("name");var n,l=e("input[type=hidden]").val(),c=(n=null,e.ajax({async:!1,global:!1,url:"booking/get_oil_price",type:"POST",data:{oil_weight:t,oil_type:i,oil_cap:a,csrf_tkn:l},dataType:"json",success:function(e){n=e}}),e.ajax({async:!1,global:!1,url:"booking/get_priceID",type:"POST",data:{oil_weight:t,oil_type:i,csrf_tkn:l},dataType:"json",success:function(o){e("#vonigo").append(o)}}),n);localStorage.oilPrice=c,localStorage.subTotal=0,localStorage.subTotal=(parseFloat(localStorage.subTotal)+parseFloat(localStorage.oilPrice)).toFixed(2),e("input[name=priceItemCount]").remove(),e("#vonigo").append('<input type="hidden" name="priceItemCount" value="'+o+'" />'),isNaN(localStorage.subTotal)?(e("#subTotalCalc").empty(),e("#addService").empty(),e("#addService_p").hide(),e("input[name=addService]").each(function(){this.checked=!1})):e("#subTotalCalc").html("<p>$"+localStorage.subTotal+"</p>"),""==e("#oilTypeDropDown").val()?(e("#oilTypeCollapse").collapse("show"),e("#service").html(""),e("#service_p").hide(),e("#vonigo").empty()):(e("#addSerLegend").show(),e("#additionalServices").show(),e("#service_p").show(),e("#oilTypeCollapse").collapse("hide"),e("#service").html(e("#oilTypeDropDown option:selected").text()+":  "+localStorage.oilPrice),e("#vonigoSubmit").attr("hidden",!1),e("#viewSubTotal").attr("hidden",!1),e("#totalCalcQuote").attr("hidden",!1))}),e("#oilTypeDropDown").focusout(function(){""==e(this).val()&&(e("#oilTypeCollapse").collapse("show"),e("#vonigoSubmit").attr("hidden",!0),e("#totalCalcQuote").attr("hidden",!0),e("#viewSubTotal").attr("hidden",!0))}),e("#selectedOilTypeDropDown").focusout(function(){""==e(this).val()&&(e("#oilTypeCollapse").collapse("show"),e("#selectedVehicleSubmit").attr("hidden",!0),e("#viewSubTotal").attr("hidden",!0))}),e("#selectedOilTypeDropDown").change(function(){e("#vonigo_selectedVehicle").empty();var i=e(this).val(),t=e("input:hidden[name=oilWeight]").val(),a=e("input:hidden[name=oilCapacity]").val();e("#subTotalCalc").empty(),e("#addService").empty(),e("#addService_p").hide(),e("input[name=addService]").each(function(){this.checked=!1});e("input[type=hidden]").attr("name");var n,l=e("input[type=hidden]").val(),c=(n=null,e.ajax({async:!1,global:!1,url:"booking/get_oil_price",type:"POST",data:{oil_weight:t,oil_type:i,oil_cap:a,csrf_tkn:l},dataType:"json",success:function(e){n=e}}),e.ajax({async:!1,global:!1,url:"booking/get_priceID_selected",type:"POST",data:{oil_weight:t,oil_type:i,oil_cap:a,csrf_tkn:l},dataType:"json",success:function(i){e("#vonigo_selectedVehicle").append(i),e("input[name=priceItemCount]").remove(),e("#vonigo_selectedVehicle").append('<input type="hidden" name="priceItemCount" value="'+o+'" />')}}),n);localStorage.oilPrice=c,localStorage.subTotal=0,localStorage.subTotal=(parseFloat(localStorage.subTotal)+parseFloat(localStorage.oilPrice)).toFixed(2),isNaN(localStorage.subTotal)?(e("#subTotalCalc").empty(),e("#addService").empty(),e("#addService_p").hide(),e("input[name=addService]").each(function(){this.checked=!1})):e("#subTotalCalc").html("<p>$"+localStorage.subTotal+"</p>"),""==e("#selectedOilTypeDropDown").val()?(e("#oilTypeCollapse").collapse("show"),e("#service").html(""),e("#service_p").hide(),e("#selectedVehicleSubmit").attr("hidden",!0),e("#viewSubTotal").attr("hidden",!0),e("#vonigo_selectedVehicle").empty()):(e("#addSerLegend").show(),e("#additionalServices").show(),e("#service_p").show(),e("#oilTypeCollapse").collapse("hide"),e("#service").html(e("#selectedOilTypeDropDown option:selected").text()+":  "+localStorage.oilPrice),e("#selectedVehicleSubmit").attr("hidden",!1),e("#viewSubTotal").attr("hidden",!1))}),e("#addvehicleBooking").click(function(){e.LoadingOverlay("show",{image:"",fontawesome:"fa fa-car fa-spin"}),location.reload()}),e("#totalCalc").click(function(){var o=0,i=(e("input[type=hidden]").attr("name"),e("input[type=hidden]").val());e(".serviceBoxes:checkbox:checked").each(function(){var t,a=e(this).val(),n=(t=null,e.ajax({async:!1,global:!1,url:"booking/get_service_price",type:"POST",data:{serviceName:a,csrf_tkn:i},dataType:"json",success:function(e){t=e}}),parseFloat(t));o+=parseFloat(n)}),localStorage.estimatedQuote=parseFloat(o)+parseFloat(localStorage.oilPrice).toFixed(2)}),e("#vonigoSubmit").click(function(){e("#vonigo_form").submit()}),e("#selectedVehicleSubmit").click(function(){e("#vonigo_formSelectedVehicle").submit()}),e("#car_light_truck").click(function(){e("#serviceBooking").append('<input type="hidden" name="step" value="stepOne"><input type="hidden" name="vehicleType" value="car_light_truck">'),e("#serviceBooking").submit()}),e("#heavy_duty").click(function(){e("#serviceBooking").append('<input type="hidden" name="step" value="stepHeavyTruck"><input type="hidden" name="vehicleType" value="heavy_duty">'),e("#serviceBooking").submit()}),e("#equipment").click(function(){e("#serviceBooking").append('<input type="hidden" name="step" value="stepEquipment"><input type="hidden" name="vehicleType" value="equipment">'),e("#serviceBooking").submit()}),e("#heavyDutyEquipment").click(function(){e("#serviceBooking").append('<input type="hidden" name="step" value="stepHeavyTruck"><input type="hidden" name="vehicleType" value="heavy_duty">'),e("#serviceBooking").submit()}),e("#additionalServices").ready(function(){var i=e("input[name=addService]"),t=(e("input[type=hidden]").attr("name"),e("input[type=hidden]").val());e("#addSerLegend").hide(),i.each(function(){e(this).click(function(){if(e(this).is(":checked")){e("#engineAirFilterModal").modal(),o++;var a=e("input[name="+e(this).val()+"]").val(),n=e(this).val();e(this).attr("disabled",!0),e.ajax({url:"booking/get_service_price",type:"POST",data:{serviceName:n,isSingle:"TRUE",csrf_tkn:t},dataType:"json",success:function(o){e("#addService_p").show(),e("#addService").append(o)},complete:function(){i.attr("disabled",!1)}}),e.ajax({url:"booking/get_service_price",type:"POST",data:{serviceName:n,csrf_tkn:t},dataType:"json",success:function(o){isNaN(localStorage.subTotal)?localStorage.subTotal=parseFloat(o).toFixed(2):localStorage.subTotal=(parseFloat(localStorage.subTotal)+parseFloat(o)).toFixed(2),e("#subTotalCalc").html("<p>$"+localStorage.subTotal+"</p>")}}),e("#vonigo").append('<input id="_'+n+'" type="hidden" name="priceItemID'+o+'" value="'+a+'"/> <input id="_'+n+'" type="hidden" name="priceItemQty'+o+'" value="1"/>'),e("#vonigo_selectedVehicle").append('<input id="_'+n+'" type="hidden" name="priceItemID'+o+'" value="'+a+'"/> <input id="_'+n+'" type="hidden" name="priceItemQty'+o+'" value="1"/>'),e("input[name=priceItemCount]").remove(),e("#vonigo").append('<input type="hidden" name="priceItemCount" value="'+o+'" />'),e("#vonigo_selectedVehicle").append('<input type="hidden" name="priceItemCount" value="'+o+'" />'),e("#selectedOil_checkbox").is(":checked")||(e("#selectedVehicleSubmit").attr("hidden",!1),e("#viewSubTotal").attr("hidden",!1)),e("#oil_checkbox").is(":checked")||(e("#vonigoSubmit").attr("hidden",!1),e("#totalCalcQuote").attr("hidden",!1),e("#viewSubTotal").attr("hidden",!1))}if(!e(this).is(":checked")){n=e(this).val();e("#_"+n+" ").remove(),e("#_"+n+" ").remove(),e("p#"+e(this).val()+" ").remove(),o--,e("input[name=priceItemCount]").remove(),e("#vonigo").append('<input type="hidden" name="priceItemCount" value="'+o+'" />'),e("#vonigo_selectedVehicle").append('<input type="hidden" name="priceItemCount" value="'+o+'" />'),e.ajax({url:"booking/get_service_price",type:"POST",data:{serviceName:n,csrf_tkn:t},dataType:"json",success:function(o){localStorage.subTotal=(parseFloat(localStorage.subTotal)-parseFloat(o)).toFixed(2),0==localStorage.subTotal?e("#subTotalCalc").empty():e("#subTotalCalc").html("<p>$"+localStorage.subTotal+"</p>")}}),e("#selectedOil_checkbox").is(":checked")||e("#selectedVehicleSubmit").attr("hidden",!0),e("#oil_checkbox").is(":checked")||(e("#vonigoSubmit").attr("hidden",!0),e("#totalCalcQuote").attr("hidden",!0))}e("#addService").is(":empty")&&e("#addService_p").hide()})})}),e("#totalCalcQuote").click(function(){var o=e("#vonigo_quote").html();localStorage.vonigoDiv=o}),e("#estimatedQuote").ready(function(){$calcEstQuote=(1.13*parseFloat(localStorage.subTotal)).toFixed(2),e("#estimatedQuote").html("<h1>*$"+$calcEstQuote+"</h1>"),e("#estimatedQuote_2").append(localStorage.vonigoDiv),e("#bookquote").click(function(){e("#vonigoQuote").submit()})}),e("#promoCodeError").hide(),e("#promotionCode").val().length>0&&(e("#selectedVehicleSubmit").attr("disabled",!0),e("#vonigoSubmit").attr("disabled",!0)),e("#promotionCode").keyup(function(){e("#validPromo").collapse("hide"),e("#promotionCode").val().length>0?(e("#selectedVehicleSubmit").attr("disabled",!0),e("#vonigoSubmit").attr("disabled",!0),e("input[name*='promo']").remove()):(e("#selectedVehicleSubmit").attr("disabled",!1),e("#vonigoSubmit").attr("disabled",!1),e("#promoCodeError").hide(),e("input[name*='promo']").remove())}),e("#redeemButton").click(function(){e("input[type=hidden]").attr("name");var o=e("input[type=hidden]").val();if(e("input[name*='promo']").remove(),""==e("#promotionCode").val())e("input[name*='promo']").remove();else{var i=e("#promotionCode").val();e.ajax({url:"booking/validate_promo",type:"POST",data:{promo:i,goValidate:!0,csrf_tkn:o},dataType:"json",success:function(o){"Promo"in JSON.parse(JSON.stringify(o))?(e("#promoCodeError").hide(),e("#selectedVehicleSubmit").attr("disabled",!1),e("#vonigoSubmit").attr("disabled",!1),e("#vonigo_client").append('<input type="hidden" name="promo" value="'+e("#promotionCode").val()+'"/>'),e("#validPromo").collapse("show")):e("#promoCodeError").show()}})}})});