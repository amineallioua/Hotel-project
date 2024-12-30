;/*FB_PKG_DELIM*/

__d("EBLSDeferred",["requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("EBLS").__setRef("EBLSDeferred");function a(){return h.load().then(function(a){return a.init()})}function b(){return h.load().then(function(a){return a.genLSClient()})}function d(){return h.load().then(function(a){return a.getLSStorage()})}function e(a,b,c){return h.load().then(function(d){return d.platformClientInit(a,b,c)})}g.init=a;g.genLSClient=b;g.getLSStorage=d;g.platformClientInit=e}),98);
__d("IGDGetMediaPlaintextApi",["MAWMediaUtils","MAWReStoreDb","WALogger","asyncToGeneratorRuntime"],(function(a,b,c,d,e,f,g){"use strict";function h(){var a=babelHelpers.taggedTemplateLiteralLoose(["Media blob does not exist for the given hashedPlaintextHash"]);h=function(){return a};return a}a=function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){var b=(yield d("MAWReStoreDb").getDB(f.id+":25"));a=d("MAWMediaUtils").genHMACPlaintextHash(a);b=(yield b.tables.e2ee_chunk.index("hashedPlaintextHash").get(a));if(!b){d("WALogger").ERROR(h());return null}return new Blob([b.blobData],{type:b.mimetype})});return function(b){return a.apply(this,arguments)}}();g.getMediaPlaintext=a}),98);
__d("IGDInteractionTraceAnnotations",["I64","IGDInstamadilloUtils","IGDRouteProvider.react","IGDThreadTTLCUtils","Int64Hooks","InteractionTracing","LSIntEnum","react","react-compiler-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=(h||d("react")).useEffect;function a(a){return babelHelpers["extends"]({},d("IGDThreadTTLCUtils").getTTLCBooleanAnnotations(a),{is_dm:d("IGDInstamadilloUtils").isIGDDisappearingModeEnabled(a),is_instamadillo:d("IGDInstamadilloUtils").isInstamadilloTransportEnabled(a),is_instamadillo_tlc:d("IGDInstamadilloUtils").isInstamadilloCutover(a)})}function l(a,b){var c=d("IGDInstamadilloUtils").isInstamadilloCutover(a),e=d("IGDInstamadilloUtils").isInstamadilloTransportEnabled(a),f=d("IGDInstamadilloUtils").isIGDDisappearingModeEnabled(a);b.addAnnotationBoolean("is_instamadillo",e);b.addAnnotationBoolean("is_instamadillo_tlc",c);b.addAnnotationBoolean("is_dm",f);b.addAnnotationBoolean("is_instamadillo_ttlc",(e=d("IGDThreadTTLCUtils")).isIGDTTLCEnabledForThread(a));b.addAnnotationBoolean("is_instamadillo_ttlc_audio",e.isInstamadilloTTLCAudioEnabled(a));b.addAnnotationBoolean("is_instamadillo_ttlc_clip",e.isInstamadilloTTLCClipEnabled(a));b.addAnnotationBoolean("is_instamadillo_ttlc_generic_xma",e.isInstamadilloTTLCGenericXmaEnabled(a));b.addAnnotationBoolean("is_instamadillo_ttlc_image",e.isInstamadilloTTLCImageEnabled(a));b.addAnnotationBoolean("is_instamadillo_ttlc_link",e.isInstamadilloTTLCLinkEnabled(a));b.addAnnotationBoolean("is_instamadillo_ttlc_media_share",e.isInstamadilloTTLCMediaShareEnabled(a));b.addAnnotationBoolean("is_instamadillo_ttlc_profile",e.isInstamadilloTTLCProfileEnabled(a));b.addAnnotationBoolean("is_instamadillo_ttlc_reel_share",e.isInstamadilloTTLCReelShareEnabled(a));b.addAnnotationBoolean("is_instamadillo_ttlc_story_share",e.isInstamadilloTTLCStoryShareEnabled(a));b.addAnnotationBoolean("is_instamadillo_ttlc_text",e.isInstamadilloTTLCTextEnabled(a));b.addAnnotationBoolean("is_instamadillo_ttlc_video",e.isInstamadilloTTLCVideoEnabled(a))}function b(a){var b=d("react-compiler-runtime").c(3),e,f;b[0]!==a?(e=function(){c("InteractionTracing").getPendingInteractions().forEach(function(b){l(a,b)})},f=[a],b[0]=a,b[1]=e,b[2]=f):(e=b[1],f=b[2]);d("Int64Hooks").useEffectInt64(e,f)}var m=new Set();function e(a){var b=d("react-compiler-runtime").c(7),e;b[0]!==a.consistentThreadFbid||b[1]!==a.threadKey||b[2]!==a.threadSubtype||b[3]!==a.threadType?(e=function(){var b=(i||(i=d("I64"))).to_string(a.threadKey);c("InteractionTracing").getPendingInteractions().forEach(function(c){var e=m.has(b);c.addAnnotationBoolean("is_thread_visited",e);c.addAnnotation("thread_key",(i||(i=d("I64"))).to_string(a.threadKey));a.consistentThreadFbid!=null&&c.addAnnotation("consistent_thread_fbid",(i||(i=d("I64"))).to_string(a.consistentThreadFbid));c.addAnnotationInt("thread_type",(j||(j=d("LSIntEnum"))).toNumber(a.threadType));a.threadSubtype!=null&&c.addAnnotation("thread_subtype",(i||(i=d("I64"))).to_string(a.threadSubtype))});return function(){m.add(b)}},b[0]=a.consistentThreadFbid,b[1]=a.threadKey,b[2]=a.threadSubtype,b[3]=a.threadType,b[4]=e):e=b[4];var f;b[5]!==a?(f=[a],b[5]=a,b[6]=f):f=b[6];d("Int64Hooks").useEffectInt64(e,f)}function f(){var a=d("react-compiler-runtime").c(5),b=d("IGDRouteProvider.react").useThreadKeyFromCurrentRoute(),e;a[0]!==b?(e=b!=null?(i||(i=d("I64"))).to_string(b):null,a[0]=b,a[1]=e):e=a[1];var f=e;a[2]!==f?(b=function(){c("InteractionTracing").getPendingInteractions().forEach(function(a){if(f==null){a.addAnnotationInt("rendered_direct_null_state",1);a.addAnnotationInt("has_thread_key",0);return}a.addAnnotationInt("has_thread_key",1);a.addAnnotationInt("rendered_direct_null_state",0)})},e=[f],a[2]=f,a[3]=b,a[4]=e):(b=a[3],e=a[4]);k(b,e)}g.getInstamadilloBooleanAnnotations=a;g.addInstamadilloAnnotationsToInteractionTrace=l;g.useAddInstamadilloAnnotationsToInteractionTraces=b;g.useAddThreadAnnotationToInteractionTraces=e;g.useAddThreadRouteAnnotations=f}),98);
__d("IGDUpdateMediaEntryForMsgApi",["FBLogger","MAWDbMsg","MAWMediaUtils","MAWReStoreDb","WALogger","WAMediaUtils","asyncToGeneratorRuntime","err"],(function(a,b,c,d,e,f,g){"use strict";function h(){var a=babelHelpers.taggedTemplateLiteralLoose(["Nothing to update if updatedMediaEntry is null"]);h=function(){return a};return a}function i(){var a=babelHelpers.taggedTemplateLiteralLoose([""," msgId does not exist within media entries"]);i=function(){return a};return a}a=function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,e,g,j,k){var l=(yield d("MAWReStoreDb").getDB(f.id+":37"));if(!k){c("FBLogger")("igd_web_on_msgr","unsupported_media").mustfix("unsupported media type");throw c("err")("Media type unsupported: "+((k=k)!=null?k:""))}var m=d("MAWMediaUtils").genHMACPlaintextHash(a);return l.runInTransaction(function(){var a=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){var b=(yield a.e2ee_media.index("hashedPlaintextHash").get(m)),f=(yield a.messages.index("messageId").get(e.externalId));if(!f)throw c("err")("Message does not exist for the given protocolMsgId");if(!b)throw c("err")("Media does not exist for the given hashedPlaintextHash");if(!b.msgIds.includes(f.messageId)){d("WALogger").LOG(i(),f.messageId);return}f=d("MAWDbMsg").stanzaIdToMsgId(e.externalId);var k=b.mediaEntries.get(f);k=g(k);if(k==null){d("WALogger").LOG(h());return}f=b.mediaEntries.set(f,k);k=babelHelpers["extends"]({},b,{mediaEntries:f});j!=null&&(k=babelHelpers["extends"]({},k,{objectId:d("WAMediaUtils").stringToDeliveryObjectId(j)}));yield a.e2ee_media.put(k)});return function(b){return a.apply(this,arguments)}}(),"readonly",void 0,void 0,f.id+":47")});return function(b,c,d,e,f){return a.apply(this,arguments)}}();g.updateMediaEntryForMsg=a}),98);
__d("InstamadilloCoreTypeActionLog.pb",["WAProtoConst"],(function(a,b,c,d,e,f,g){a={};b={};a.internalSpec={actionLogReaction:[1,d("WAProtoConst").TYPES.MESSAGE,b],__oneofs__:{actionLogSubtype:["actionLogReaction"]}};b.internalSpec={emojiUnicode:[1,d("WAProtoConst").TYPES.STRING]};g.ActionLogSpec=a;g.ActionLogReactionSpec=b}),98);
__d("InstamadilloCoreTypeAdminMessage.pb",["WAProtoConst"],(function(a,b,c,d,e,f,g){a={DEVICE_ADMIN_MESSAGE_TYPE_NONE:0,DEVICE_ADMIN_MESSAGE_TYPE_LOCAL_USER_CHANGED_IDENTITY_KEY_NAMED_DEVICE:1,DEVICE_ADMIN_MESSAGE_TYPE_SECURITY_ALERT_PARTICIPANT_KEY_CHANGE:2,DEVICE_ADMIN_MESSAGE_TYPE_SECURITY_ALERT_PARTICIPANT_NEW_LOGIN:3};b={};c={};b.internalSpec={deviceAdminMessage:[1,d("WAProtoConst").TYPES.MESSAGE,c],__oneofs__:{adminMessageSubtype:["deviceAdminMessage"]}};c.internalSpec={deviceAdminMessageType:[1,d("WAProtoConst").TYPES.ENUM,a],deviceName:[2,d("WAProtoConst").TYPES.STRING]};g.DEVICE_ADMIN_MESSAGE_TYPE=a;g.AdminMessageSpec=b;g.DeviceAdminMessageSpec=c}),98);
__d("InstamadilloCoreTypeMedia.pb",["WAProtoConst"],(function(a,b,c,d,e,f,g){a={PJPEG_SCAN_CONFIGURATION_UNSPECIFIED:0,PJPEG_SCAN_CONFIGURATION_WA:1,PJPEG_SCAN_CONFIGURATION_E15:2,PJPEG_SCAN_CONFIGURATION_E35:3};b={RAVEN_VIEW_MODEL_UNSPECIFIED:0,RAVEN_VIEW_MODEL_ONCE:1,RAVEN_VIEW_MODEL_REPLAYABLE:2,RAVEN_VIEW_MODEL_PERMANENT:3};c={UNSET:0,NONE:1,NUDE:2};e={};f={};var h={},i={},j={},k={},l={},m={},n={},o={},p={};e.internalSpec={staticPhoto:[1,(d=d("WAProtoConst")).TYPES.MESSAGE,f],voice:[2,d.TYPES.MESSAGE,h],video:[3,d.TYPES.MESSAGE,i],raven:[4,d.TYPES.MESSAGE,l],gif:[5,d.TYPES.MESSAGE,j],avatarSticker:[6,d.TYPES.MESSAGE,k],__oneofs__:{media:["staticPhoto","voice","video","raven","gif","avatarSticker"]}};f.internalSpec={mediaTransport:[1,d.TYPES.MESSAGE,o],height:[2,d.TYPES.INT32],width:[3,d.TYPES.INT32],scanLengths:[4,d.FLAGS.REPEATED|d.FLAGS.PACKED|d.TYPES.INT32],thumbnail:[5,d.TYPES.MESSAGE,n],pjpegScanConfiguration:[6,d.TYPES.ENUM,a]};h.internalSpec={mediaTransport:[1,d.TYPES.MESSAGE,o],duration:[2,d.TYPES.INT32],waveforms:[3,d.FLAGS.REPEATED|d.FLAGS.PACKED|d.TYPES.FLOAT],waveformSamplingFrequencyHz:[4,d.TYPES.INT32]};i.internalSpec={mediaTransport:[1,d.TYPES.MESSAGE,o],height:[2,d.TYPES.INT32],width:[3,d.TYPES.INT32],thumbnail:[4,d.TYPES.MESSAGE,n],videoExtraMetadata:[5,d.TYPES.MESSAGE,p]};j.internalSpec={mediaTransport:[1,d.TYPES.MESSAGE,o],height:[2,d.TYPES.INT32],width:[3,d.TYPES.INT32],isSticker:[4,d.TYPES.BOOL],stickerId:[5,d.TYPES.STRING],gifUrl:[6,d.TYPES.STRING],gifSize:[7,d.TYPES.INT32],isRandom:[8,d.TYPES.BOOL]};k.internalSpec={mediaTransport:[1,d.TYPES.MESSAGE,o],isAnimated:[2,d.TYPES.BOOL],stickerId:[3,d.TYPES.STRING],stickerTemplate:[4,d.TYPES.STRING],nuxType:[5,d.TYPES.INT32]};l.internalSpec={viewMode:[1,d.TYPES.ENUM,b],content:[2,d.TYPES.MESSAGE,m]};m.internalSpec={staticPhoto:[1,d.TYPES.MESSAGE,f],video:[2,d.TYPES.MESSAGE,i],__oneofs__:{ravenContent:["staticPhoto","video"]}};n.internalSpec={mediaTransport:[1,d.TYPES.MESSAGE,o],height:[2,d.TYPES.INT32],width:[3,d.TYPES.INT32]};o.internalSpec={mediaId:[1,d.TYPES.STRING],fileSha256:[2,d.TYPES.STRING],mediaKey:[3,d.TYPES.STRING],fileEncSha256:[4,d.TYPES.STRING],directPath:[5,d.TYPES.STRING],mediaKeyTimestamp:[6,d.TYPES.STRING],sidecar:[7,d.TYPES.STRING],fileLength:[8,d.TYPES.INT32],mimetype:[9,d.TYPES.STRING],objectId:[10,d.TYPES.STRING]};p.internalSpec={uploadMosClientScore:[1,d.TYPES.FLOAT]};g.PJPEG_SCAN_CONFIGURATION=a;g.RAVEN_VIEW_MODE=b;g.MEDIA_INTERVENTION_TYPE=c;g.MediaSpec=e;g.StaticPhotoSpec=f;g.VoiceSpec=h;g.VideoSpec=i;g.GifSpec=j;g.AvatarStickerSpec=k;g.RavenSpec=l;g.RavenContentSpec=m;g.ThumbnailSpec=n;g.CommonMediaTransportSpec=o;g.VideoExtraMetadataSpec=p}),98);
__d("InstamadilloCoreTypeCollection.pb",["InstamadilloCoreTypeMedia.pb","WAProtoConst"],(function(a,b,c,d,e,f,g){a={};a.internalSpec={name:[1,d("WAProtoConst").TYPES.STRING],media:[2,d("WAProtoConst").FLAGS.REPEATED|d("WAProtoConst").TYPES.MESSAGE,d("InstamadilloCoreTypeMedia.pb").MediaSpec]};g.CollectionSpec=a}),98);
__d("InstamadilloCoreTypeLink.pb",["InstamadilloCoreTypeMedia.pb","WAProtoConst"],(function(a,b,c,d,e,f,g){a={};b={};c={};a.internalSpec={text:[1,(e=d("WAProtoConst")).TYPES.STRING],linkContext:[2,e.TYPES.MESSAGE,b]};b.internalSpec={linkImageUrl:[1,e.TYPES.MESSAGE,c],linkPreviewTitle:[2,e.TYPES.STRING],linkUrl:[3,e.TYPES.STRING],linkSummary:[4,e.TYPES.STRING],linkMusicPreviewUrl:[5,e.TYPES.STRING],linkMusicPreviewCountriesAllowed:[6,e.FLAGS.REPEATED|e.TYPES.STRING],linkPreviewThumbnail:[7,e.TYPES.MESSAGE,d("InstamadilloCoreTypeMedia.pb").ThumbnailSpec],linkPreviewBody:[8,e.TYPES.STRING]};c.internalSpec={url:[1,e.TYPES.STRING],width:[2,e.TYPES.INT32],height:[3,e.TYPES.INT32]};g.LinkSpec=a;g.LinkContextSpec=b;g.ImageUrlSpec=c}),98);
__d("InstamadilloCoreTypeText.pb",["InstamadilloCoreTypeMedia.pb","WAProtoConst"],(function(a,b,c,d,e,f,g){var h;a={TEXT_FORMAT_STYLE_UNSPECIFIED:0,TEXT_FORMAT_STYLE_BOLD:1,TEXT_FORMAT_STYLE_ITALIC:2,TEXT_FORMAT_STYLE_STRIKETHROUGH:3,TEXT_FORMAT_STYLE_UNDERLINE:4,TEXT_FORMAT_STYLE_INVALID:5};b={};c={};e={};f={};var i={};b.internalSpec={text:[1,(h=d("WAProtoConst")).TYPES.STRING],isSuggestedReply:[2,h.TYPES.BOOL],postbackPayload:[3,h.TYPES.STRING],powerUpData:[4,h.TYPES.MESSAGE,c],commands:[5,h.FLAGS.REPEATED|h.TYPES.MESSAGE,e],animatedEmojiCharacterRanges:[6,h.FLAGS.REPEATED|h.TYPES.MESSAGE,i]};c.internalSpec={style:[1,h.TYPES.INT32],mediaAttachment:[2,h.TYPES.MESSAGE,d("InstamadilloCoreTypeMedia.pb").CommonMediaTransportSpec]};e.internalSpec={offset:[1,h.TYPES.INT32],length:[2,h.TYPES.INT32],type:[3,h.TYPES.INT32],fbid:[4,h.TYPES.STRING],userOrThreadFbid:[5,h.TYPES.STRING]};f.internalSpec={offset:[1,h.TYPES.INT32],length:[2,h.TYPES.INT32],style:[3,h.TYPES.ENUM,a]};i.internalSpec={offset:[1,h.TYPES.INT32],length:[2,h.TYPES.INT32]};g.TEXT_FORMAT_STYLE=a;g.TextSpec=b;g.PowerUpsDataSpec=c;g.CommandRangeDataSpec=e;g.FormattedTextSpec=f;g.AnimatedEmojiCharacterRangeSpec=i}),98);
__d("InstamadilloXmaContentRef.pb",["WAProtoConst"],(function(a,b,c,d,e,f,g){a={XMA_ACTION_TYPE_UNSPECIFIED:0,XMA_ACTION_TYPE_SHARE:1,XMA_ACTION_TYPE_REPLY:2,XMA_ACTION_TYPE_REACT:3,XMA_ACTION_TYPE_MENTION:4};b={RECEIVER_FETCH_CONTENT_TYPE_UNSPECIFIED:0,RECEIVER_FETCH_CONTENT_TYPE_NOTE:1,RECEIVER_FETCH_CONTENT_TYPE_STORY:2,RECEIVER_FETCH_CONTENT_TYPE_PROFILE:3,RECEIVER_FETCH_CONTENT_TYPE_CLIP:4,RECEIVER_FETCH_CONTENT_TYPE_FEED:5,RECEIVER_FETCH_CONTENT_TYPE_LIVE:6,RECEIVER_FETCH_CONTENT_TYPE_COMMENT:7,RECEIVER_FETCH_CONTENT_TYPE_LOCATION_SHARE:8,RECEIVER_FETCH_CONTENT_TYPE_REELS_AUDIO:9,RECEIVER_FETCH_CONTENT_TYPE_MEDIA_NOTE:10,RECEIVER_FETCH_CONTENT_TYPE_STORY_HIGHLIGHT:11,RECEIVER_FETCH_CONTENT_TYPE_SOCIAL_CONTEXT:12};c={MEDIA_NOTE_FETCH_PARAMS_MESSAGE_TYPE_UNSPECIFIED:0,MEDIA_NOTE_FETCH_PARAMS_MESSAGE_TYPE_MENTION:1,MEDIA_NOTE_FETCH_PARAMS_MESSAGE_TYPE_REPLY:2};e={};f={};var h={},i={},j={},k={},l={},m={},n={},o={},p={},q={},r={};e.internalSpec={actionType:[1,(d=d("WAProtoConst")).TYPES.ENUM,a],contentType:[2,d.TYPES.ENUM,b],targetUrl:[3,d.TYPES.STRING],userName:[4,d.TYPES.STRING],ownerFbid:[5,d.TYPES.STRING],fetchParams:[6,d.TYPES.MESSAGE,f]};f.internalSpec={noteFetchParams:[1,d.TYPES.MESSAGE,h],storyFetchParams:[2,d.TYPES.MESSAGE,i],profileFetchParams:[3,d.TYPES.MESSAGE,j],clipFetchParams:[4,d.TYPES.MESSAGE,k],feedFetchParams:[5,d.TYPES.MESSAGE,l],liveFetchParams:[6,d.TYPES.MESSAGE,m],commentFetchParams:[7,d.TYPES.MESSAGE,n],locationShareFetchParams:[8,d.TYPES.MESSAGE,o],reelsAudioFetchParams:[9,d.TYPES.MESSAGE,p],mediaNoteFetchParams:[10,d.TYPES.MESSAGE,q],socialContextFetchParams:[11,d.TYPES.MESSAGE,r],__oneofs__:{receiverFetchXmaFetchParams:["noteFetchParams","storyFetchParams","profileFetchParams","clipFetchParams","feedFetchParams","liveFetchParams","commentFetchParams","locationShareFetchParams","reelsAudioFetchParams","mediaNoteFetchParams","socialContextFetchParams"]}};h.internalSpec={noteIgid:[1,d.TYPES.STRING]};i.internalSpec={storyIgid:[1,d.TYPES.STRING],reelId:[2,d.TYPES.STRING]};j.internalSpec={profileIgid:[1,d.TYPES.STRING]};k.internalSpec={mediaIgid:[1,d.TYPES.STRING]};l.internalSpec={mediaIgid:[1,d.TYPES.STRING],carouselShareChildMediaIgid:[2,d.TYPES.STRING]};m.internalSpec={liveIgid:[1,d.TYPES.STRING]};n.internalSpec={commentFbid:[1,d.TYPES.STRING]};o.internalSpec={locationIgid:[1,d.TYPES.STRING]};p.internalSpec={audioIgid:[1,d.TYPES.STRING]};q.internalSpec={mediaNoteIgid:[1,d.TYPES.STRING],messageType:[2,d.TYPES.ENUM,c]};r.internalSpec={mediaIgid:[1,d.TYPES.STRING]};g.XMA_ACTION_TYPE=a;g.RECEIVER_FETCH_CONTENT_TYPE=b;g.MEDIA_NOTE_FETCH_PARAMS_MESSAGE_TYPE=c;g.XmaContentRefSpec=e;g.ReceiverFetchXmaFetchParamsSpec=f;g.ReceiverFetchXmaNoteFetchParamsSpec=h;g.ReceiverFetchXmaStoryFetchParamsSpec=i;g.ReceiverFetchXmaProfileFetchParamsSpec=j;g.ReceiverFetchXmaClipFetchParamsSpec=k;g.ReceiverFetchXmaFeedFetchParamsSpec=l;g.ReceiverFetchXmaLiveFetchParamsSpec=m;g.ReceiverFetchXmaCommentFetchParamsSpec=n;g.ReceiverFetchXmaLocationShareFetchParamsSpec=o;g.ReceiverFetchXmaReelsAudioFetchParamsSpec=p;g.ReceiverFetchXmaMediaNoteFetchParamsSpec=q;g.ReceiverFetchXmaSocialContextFetchParamsSpec=r}),98);
__d("InstamadilloAddMessage.pb",["InstamadilloCoreTypeActionLog.pb","InstamadilloCoreTypeAdminMessage.pb","InstamadilloCoreTypeCollection.pb","InstamadilloCoreTypeLink.pb","InstamadilloCoreTypeMedia.pb","InstamadilloCoreTypeText.pb","InstamadilloXmaContentRef.pb","WAProtoConst"],(function(a,b,c,d,e,f,g){var h;a={PLACEHOLDER_TYPE_NONE:0,PLACEHOLDER_TYPE_DECRYPTION_FAILURE:1,PLACEHOLDER_TYPE_NOT_SUPPORTED_NEED_UPDATE:2,PLACEHOLDER_TYPE_DEVICE_UNAVAILABLE:3,PLACEHOLDER_TYPE_NOT_SUPPORTED_NOT_RECOVERABLE:4};b={};c={};e={};f={};var i={},j={},k={},l={},m={},n={},o={};b.internalSpec={content:[1,(h=d("WAProtoConst")).TYPES.MESSAGE,c],metadata:[2,h.TYPES.MESSAGE,e]};c.internalSpec={text:[1,h.TYPES.MESSAGE,d("InstamadilloCoreTypeText.pb").TextSpec],like:[2,h.TYPES.MESSAGE,m],link:[3,h.TYPES.MESSAGE,d("InstamadilloCoreTypeLink.pb").LinkSpec],receiverFetchXma:[4,h.TYPES.MESSAGE,n],media:[5,h.TYPES.MESSAGE,d("InstamadilloCoreTypeMedia.pb").MediaSpec],placeholder:[6,h.TYPES.MESSAGE,o],collection:[7,h.TYPES.MESSAGE,d("InstamadilloCoreTypeCollection.pb").CollectionSpec],adminMessage:[8,h.TYPES.MESSAGE,d("InstamadilloCoreTypeAdminMessage.pb").AdminMessageSpec],actionLog:[9,h.TYPES.MESSAGE,d("InstamadilloCoreTypeActionLog.pb").ActionLogSpec],__oneofs__:{addMessageContent:["text","like","link","receiverFetchXma","media","placeholder","collection","adminMessage","actionLog"]}};e.internalSpec={sendSilently:[1,h.TYPES.BOOL],privateReplyInfo:[2,h.TYPES.MESSAGE,j],repliedToMessage:[3,h.TYPES.MESSAGE,f],forwardingParams:[4,h.TYPES.MESSAGE,k],ephemeralityParams:[5,h.TYPES.MESSAGE,l]};f.internalSpec={repliedToMessageOtid:[1,h.TYPES.STRING],repliedToMessageWaServerTimeSec:[2,h.TYPES.STRING],repliedToMessageCollectionItemId:[3,h.TYPES.STRING],omMicroSecTs:[4,h.TYPES.MESSAGE,i]};i.internalSpec={timestampMs:[1,h.TYPES.INT64],microSecondsBits:[2,h.TYPES.INT32]};j.internalSpec={commentId:[1,h.TYPES.STRING],postLink:[2,h.TYPES.STRING]};k.internalSpec={forwardedThreadId:[1,h.TYPES.STRING]};l.internalSpec={ephemeralDurationSec:[1,h.TYPES.INT64]};m.internalSpec={};n.internalSpec={contentRef:[1,h.TYPES.STRING],text:[2,h.TYPES.STRING],media:[3,h.TYPES.MESSAGE,d("InstamadilloCoreTypeMedia.pb").MediaSpec],xmaContentRef:[4,h.TYPES.MESSAGE,d("InstamadilloXmaContentRef.pb").XmaContentRefSpec]};o.internalSpec={placeholderType:[1,h.TYPES.ENUM,a]};g.PLACEHOLDER_TYPE=a;g.AddMessagePayloadSpec=b;g.AddMessageContentSpec=c;g.AddMessageMetadataSpec=e;g.RepliedToMessageSpec=f;g.OpenMessageMicroSecondTimestampSpec=i;g.PrivateReplyInfoSpec=j;g.ForwardingParamsSpec=k;g.EphemeralityParamsSpec=l;g.LikeSpec=m;g.ReceiverFetchXmaSpec=n;g.PlaceholderSpec=o}),98);
__d("InstamadilloDeleteMessage.pb",["WAProtoConst"],(function(a,b,c,d,e,f,g){a={};a.internalSpec={messageOtid:[1,d("WAProtoConst").TYPES.STRING]};g.DeleteMessagePayloadSpec=a}),98);
__d("InstamadilloSupplementMessage.pb",["InstamadilloCoreTypeMedia.pb","WAProtoConst"],(function(a,b,c,d,e,f,g){var h;a={};b={};c={};e={};f={};var i={},j={},k={};a.internalSpec={targetMessageOtid:[1,(h=d("WAProtoConst")).TYPES.STRING],uniquingKeyForSupplementalData:[2,h.TYPES.STRING],content:[3,h.TYPES.MESSAGE,b],targetMessageWaServerTimeSec:[4,h.TYPES.STRING],targetWaThreadId:[5,h.TYPES.STRING]};b.internalSpec={reaction:[1,h.TYPES.MESSAGE,e],contentView:[2,h.TYPES.MESSAGE,f],editText:[3,h.TYPES.MESSAGE,i],mediaReaction:[4,h.TYPES.MESSAGE,c],originalTransportPayload:[5,h.TYPES.MESSAGE,j],mediaInterventions:[6,h.TYPES.MESSAGE,k],__oneofs__:{supplementMessageContent:["reaction","contentView","editText","mediaReaction","originalTransportPayload","mediaInterventions"]}};c.internalSpec={mediaId:[1,h.TYPES.STRING],reaction:[2,h.TYPES.MESSAGE,e]};e.internalSpec={reactionType:[1,h.TYPES.STRING],reactionStatus:[2,h.TYPES.STRING],emoji:[3,h.TYPES.STRING],superReactType:[4,h.TYPES.STRING],actionLogOtid:[5,h.TYPES.STRING]};f.internalSpec={seen:[1,h.TYPES.BOOL],screenshotted:[2,h.TYPES.BOOL],replayed:[3,h.TYPES.BOOL],mimetype:[4,h.TYPES.STRING],objectId:[5,h.TYPES.STRING]};i.internalSpec={newContent:[1,h.TYPES.STRING],editCount:[2,h.TYPES.INT32]};j.internalSpec={originalTransportPayload:[1,h.TYPES.BYTES]};k.internalSpec={mediaId:[1,h.TYPES.STRING],interventionType:[2,h.TYPES.ENUM,d("InstamadilloCoreTypeMedia.pb").MEDIA_INTERVENTION_TYPE]};g.SupplementMessagePayloadSpec=a;g.SupplementMessageContentSpec=b;g.MediaReactionSpec=c;g.ReactionSpec=e;g.ContentViewSpec=f;g.EditTextSpec=i;g.OriginalTransportPayloadSpec=j;g.MediaInterventionsSpec=k}),98);
__d("InstamadilloTransportPayload.pb",["InstamadilloAddMessage.pb","InstamadilloDeleteMessage.pb","InstamadilloSupplementMessage.pb","WAProtoConst"],(function(a,b,c,d,e,f,g){a={};b={};a.internalSpec={add:[1,(c=d("WAProtoConst")).TYPES.MESSAGE,d("InstamadilloAddMessage.pb").AddMessagePayloadSpec],"delete":[2,c.TYPES.MESSAGE,d("InstamadilloDeleteMessage.pb").DeleteMessagePayloadSpec],supplement:[3,c.TYPES.MESSAGE,d("InstamadilloSupplementMessage.pb").SupplementMessagePayloadSpec],franking:[4,c.TYPES.MESSAGE,b],openEb:[5,c.TYPES.BOOL],isE2EeAttributed:[6,c.TYPES.BOOL],__oneofs__:{transportPayload:["add","delete","supplement"]}};b.internalSpec={frankingKey:[1,c.TYPES.BYTES],frankingVersion:[2,c.TYPES.INT32]};g.TransportPayloadSpec=a;g.FrankingSpec=b}),98);
__d("MAWFetchXMABlob",["FBLogger","Promise"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){var d=a.descriptionForLogging,e=a.url,f=a.xmaContentType;return e==null||e===""?(h||(h=b("Promise"))).resolve():window.fetch(e).then(function(a){return a.blob()})["catch"](function(a){c("FBLogger")("messenger_web_sharing").mustfix("Error fetching url in xma share from %s, with XMA content type %s and error %s",d,f,a);return(h||(h=b("Promise"))).resolve()})}g.fetchBlob=a}),98);
__d("MWGetOriginalEntrypoint",["I64","InteractionTracingMetrics","MWChatInteraction"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){var b,e=d("MWChatInteraction").get((h||(h=d("I64"))).to_string(a));e=e!=null?c("InteractionTracingMetrics").get(e):null;e=(b=e==null?void 0:(b=e.annotations.string)==null?void 0:b.inboxEntrypoint)!=null?b:e==null?void 0:(b=e.annotations.string)==null?void 0:b.entrypoint;if(e!=null&&e!=="unknown")return e;b=d("MWChatInteraction").get("inbox_init");if(b!=null&&(h||(h=d("I64"))).equal(a,(h||(h=d("I64"))).of_string(b)))return"initInbox";e=d("MWChatInteraction").get(d("MWChatInteraction").MW_AUTO_CHAT_TAB_OPEN);b=e!=null?(b=c("InteractionTracingMetrics").get(e))==null?void 0:(e=b.annotations.string)==null?void 0:e.thread_id:null;return b===(h||(h=d("I64"))).to_string(a)?"auto_open":"unknown"}g["default"]=a}),98);
__d("MWHasLinksUtil",["URLMatcher","isStringNullOrEmpty"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return c("isStringNullOrEmpty")(a)?!1:c("URLMatcher").match(a)!=null}g.getHasLinks=a}),98);
__d("MWMsgMediaTypeLogUtils",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";var g=b("$InternalEnum")({Application:"application",Audio:"audio",Avatar:"avatar",HotEmoji:"hot_emoji",File:"file",Gif:"gif",Image:"image",Link:"link",None:"none",Poll:"poll",Reaction:"reaction",Sticker:"sticker",Video:"video",Share:"share"});function a(a){var b=a.hasFile;b=b===void 0?!1:b;var c=a.hasGif;c=c===void 0?!1:c;var d=a.hasHotEmoji;d=d===void 0?!1:d;var e=a.hasImage;e=e===void 0?!1:e;var f=a.hasLinks;f=f===void 0?!1:f;var h=a.hasShare;h=h===void 0?!1:h;var i=a.hasSticker;i=i===void 0?!1:i;var j=a.hasVideo;j=j===void 0?!1:j;a=a.hasVoiceClip;a=a===void 0?!1:a;var k=g.None;e?k=g.Image:j?k=g.Video:d?k=g.HotEmoji:i?k=g.Sticker:c?k=g.Gif:a?k=g.Audio:f?k=g.Link:b?k=g.File:h&&(k=g.Share);return k}f.AttachmentType=g;f.getAttachmentType=a}),66);
__d("MWVersion",["I64"],(function(a,b,c,d,e,f,g){"use strict";var h;a=(h||d("I64")).of_string("2");g.v2=a}),98);
__d("MWSharedMsgLogUtils",["$InternalEnum","I64","IGDInteractionTraceAnnotations","LSIntEnum","LSMessagingThreadAttributionType","LSMessagingThreadTypeUtil","MAWEBSwitch","MWGetOriginalEntrypoint","MWHasLinksUtil","MWMsgMediaTypeLogUtils","MWVersion","MultipleTabsLogger","asyncToGeneratorRuntime","cr:6985","gkx","isArmadillo","isStringNullOrEmpty","promiseDone","shouldUseMAWSharedWorker"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=b("$InternalEnum")({Send:"send",Reaction:"reaction",Reply:"reply",Forward:"forward",Share:"share",StoryReply:"story-reply",Unsend:"unsend",GroupInvite:"group-invite",SenderKeyDistribution:"sender-key-distribution",EphemeralSetting:"ephemeral-setting"}),k=b("$InternalEnum")({Text:"text",NonText:"non-text"});function l(a,b,c){return m.apply(this,arguments)}function m(){m=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b,e){var f=a.hasAttachment,g=a.hasEphemeralSetting,i=a.hasGroupInvite,l=a.hasReaction,m=a.hasReply,n=a.hasSenderKeyDistribution,p=a.hasStoryReply,q=a.hasText,r=a.isUnsend;a=babelHelpers.objectWithoutPropertiesLoose(a,["hasAttachment","hasEphemeralSetting","hasGroupInvite","hasReaction","hasReply","hasSenderKeyDistribution","hasStoryReply","hasText","isUnsend"]);var s=j.Send;m?s=j.Reply:p?s=j.StoryReply:r?s=j.Unsend:l?s=j.Reaction:i?s=j.GroupInvite:g?s=j.EphemeralSetting:n&&(s=j.SenderKeyDistribution);m=d("MWMsgMediaTypeLogUtils").getAttachmentType(a);p=q&&(!m||m===d("MWMsgMediaTypeLogUtils").AttachmentType.None)?k.Text:k.NonText;return{bool:{has_attachment:f,has_sticker:a.hasSticker,is_attachments_grouped:a.isAttachmentsGrouped,is_eb_enabled:c("MAWEBSwitch").isEnabled(),is_pdb:Boolean(c("gkx")("8483")),is_tlc_public_user:c("gkx")("24028"),use_maw_shared_worker:d("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker()},"int":{number_of_attachments:a.numberOfAttachments,number_of_grouped_attachments:a.numberOfGroupedAttachments},string:{action_type:s,attachment_type:m,entrypoint:o(b),message_type:p,multipleTabs:yield d("MultipleTabsLogger").getMultipleTabsAnnotation(),mw_version:(h||(h=d("I64"))).to_string(d("MWVersion").v2),root_component:e}}});return m.apply(this,arguments)}function a(a,b,c,d){return n.apply(this,arguments)}function n(){n=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,e,f,g){var i=b("cr:6985")!=null?yield b("cr:6985").isCutoverThreadKey(a.threadKey):!1;e=(yield l(e,f,g));return{bool:babelHelpers["extends"]({},e.bool,d("IGDInteractionTraceAnnotations").getInstamadilloBooleanAnnotations(a),{is_community_event:a.eventStartTimestampMs!=null,is_cutover:c("isArmadillo")()&&i,is_message_request:d("LSMessagingThreadTypeUtil").isMessageRequest(a),is_secure:d("LSMessagingThreadTypeUtil").isArmadilloSecure(a.threadType)}),"int":babelHelpers["extends"]({},e["int"]),string:babelHelpers["extends"]({},e.string,{consistent_thread_fbid:a.consistentThreadFbid!=null?(h||(h=d("I64"))).to_string(a.consistentThreadFbid):null,original_entrypoint:c("MWGetOriginalEntrypoint")(a.threadKey),thread_id:(h||(h=d("I64"))).to_string(a.threadKey),thread_subtype:a.threadSubtype!=null?(h||(h=d("I64"))).to_string(a.threadSubtype):null,thread_type:h.to_string(a.threadType)})}});return n.apply(this,arguments)}function e(a,e,f,g){var i=e.hasFile;i=i===void 0?!1:i;var l=e.hasGif;l=l===void 0?!1:l;var m=e.hasHotEmoji;m=m===void 0?!1:m;var n=e.hasImage;n=n===void 0?!1:n;var o=e.hasLinks;o=o===void 0?!1:o;var p=e.hasReply;p=p===void 0?!1:p;var q=e.hasShare;q=q===void 0?!1:q;var r=e.hasSticker;r=r===void 0?!1:r;var s=e.hasStoryReply;s=s===void 0?!1:s;var t=e.hasText;t=t===void 0?!1:t;var u=e.hasVideo;u=u===void 0?!1:u;var v=e.hasVoiceClip;v=v===void 0?!1:v;var w=e.isAttachmentsGrouped,x=e.numberOfAttachments;x=x===void 0?0:x;e=e.numberOfGroupedAttachments;e=e===void 0?0:e;var y=j.Send;p?y=j.Reply:s&&(y=j.StoryReply);p=d("MWMsgMediaTypeLogUtils").getAttachmentType({hasFile:i,hasGif:l,hasHotEmoji:m,hasImage:n,hasLinks:o,hasShare:q,hasSticker:r,hasVideo:u,hasVoiceClip:v,numberOfAttachments:x,numberOfGroupedAttachments:e});s=t&&(!p||p===d("MWMsgMediaTypeLogUtils").AttachmentType.None)?k.Text:k.NonText;d("MultipleTabsLogger").addAnnotationWithInteractionUuid(a.getTraceId());a.addAnnotation("attachment_type",p);a.addAnnotation("action_type",y);a.addAnnotation("message_type",s);a.addAnnotation("original_entrypoint",c("MWGetOriginalEntrypoint")(f.threadKey));g!=null&&a.addAnnotation("root_component",g);a.addAnnotationInt("number_of_attachments",x);w!=null&&a.addAnnotationBoolean("is_attachments_grouped",w);a.addAnnotation("thread_id",(h||(h=d("I64"))).to_string(f.threadKey));f.consistentThreadFbid!=null&&a.addAnnotation("consistent_thread_fbid",(h||(h=d("I64"))).to_string(f.consistentThreadFbid));a.addAnnotation("thread_type",h.to_string(f.threadType));f.threadSubtype!=null&&a.addAnnotation("thread_subtype",(h||(h=d("I64"))).to_string(f.threadSubtype));b("cr:6985")!=null&&c("promiseDone")(b("cr:6985").isCutoverThreadKey(f.threadKey),function(b){a.addAnnotationBoolean("is_cutover",b)});d("IGDInteractionTraceAnnotations").addInstamadilloAnnotationsToInteractionTrace(f,a);a.addAnnotationBoolean("is_secure",d("LSMessagingThreadTypeUtil").isArmadilloSecure(f.threadType));a.addAnnotationBoolean("is_eb_enabled",c("MAWEBSwitch").isEnabled());a.addAnnotationBoolean("use_maw_shared_worker",d("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker());a.addAnnotationBoolean("is_pdb",Boolean(c("gkx")("8483")))}function f(a){var b=a.externalAttachmentUrl,e=a.hotEmojiSize,f=a.isEphemeralSetting,g=a.isGroupInvite,h=a.isReaction,i=a.isSenderKeyDistribution,j=a.isUnsend,k=a.mediaGroupInfo,l=a.mediaStagings,m=a.messageText,n=a.reply,o=a.sentFromShareSheet,p=a.stickerId,q=a.threadType;a=a.voiceClip;var r=!c("isStringNullOrEmpty")(m);m=d("MWHasLinksUtil").getHasLinks(m);var s=!1;a=a!=null;a?s=!0:b!=null&&(s=!0);var t=!1,u=!1,v=!1,w=0,x=0,y;if(l!=null&&l.length>0){s=!0;for(var z of l){var A=z.mimeType;A.indexOf("image")!==-1&&(t=!0);A.indexOf("video")!==-1&&(u=!0);A.indexOf("application")!==-1&&(v=!0)}if(t&&q!=null){A=d("LSMessagingThreadTypeUtil").isArmadilloSecure(q);y=!A||c("gkx")("5318")===!0}w=l.length}k!=null&&(y=!0,x=k.messagesAndAttachments.length);z=e!=null;q=n!=null;A=n!=null;l=p!=null&&!z;k=!l&&b!=null;e=o===!0;n=h===!0;p=g===!0;b=f===!0;o=i===!0;return{hasAttachment:s,hasEphemeralSetting:b,hasFile:v,hasGif:k,hasGroupInvite:p,hasHotEmoji:z,hasImage:t,hasLinks:m,hasReaction:n,hasReply:q,hasSenderKeyDistribution:o,hasShare:e,hasSticker:l,hasStoryReply:A,hasText:r,hasVideo:u,hasVoiceClip:a,isAttachmentsGrouped:y,isUnsend:(h=j)!=null?h:!1,numberOfAttachments:w,numberOfGroupedAttachments:x}}function o(a){var b;return(b=Object.keys(c("LSMessagingThreadAttributionType")).find(function(b){return c("LSMessagingThreadAttributionType")[b]===a}))!=null?b:"UNKNOWN"}function p(a){if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(2)))return"media";else if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(4)))return"audio";else if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(4096))||(h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(134217728)))return"sticker";else if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(16384)))return"gif";else if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(64)))return"file";else if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(1)))return"text";else if((h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(1024))||(h||(h=d("I64"))).equal(a,(i||(i=d("LSIntEnum"))).ofNumber(536870912)))return"XMA";else return"unknown"}g.ActionType=j;g.MsgType=k;g.getSendToSentBaseAnnotations=l;g.getSendToSentAnnotations=a;g.addSendMessageMetadataForInteractionTrace=e;g.getMessageTypeParams=f;g.getEntrypointAnnotation=o;g.getMessageTypeFromDisplayedContentType=p}),98);
__d("isGroupInvitesEnabled",["qex"],(function(a,b,c,d,e,f,g){"use strict";function a(){return c("qex")._("125")===!0}g["default"]=a}),98);